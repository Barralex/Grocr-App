import { takeEvery, call, take, put, fork } from "redux-saga/effects";
import { authentication, database } from "../services/firebase";
import CONSTANTS from "../store/CONSTANTS";
import { Alert } from "react-native";
import { eventChannel } from "redux-saga";
import {
  setOnlineUsersCounter,
  finishLoading,
  startLoading,
} from "./../store/ACTIONS";

const firebaseRegister = (values) =>
  authentication
    .createUserWithEmailAndPassword(values.email, values.password)
    .then((success) => success);

const userDatabasaRegister = ({ uid, email, name }) => {
  return database.ref(`users/${uid}`).set({
    username: name,
    email,
  });
};

function* onlinenHandler({ data }) {
  const onlineRef = database.ref(`online/${data.uid}`);

  onlineRef.set({
    email: data.email,
  });

  onlineRef.onDisconnect().remove();
}

function* userRegisterHandler(values) {
  try {
    yield put(startLoading());
    const register = yield call(firebaseRegister, values.data);
    const { email, uid } = register.user;
    const {
      data: { name },
    } = values;
    yield call(userDatabasaRegister, { uid, email, name });
  } catch (error) {
    Alert.alert("Signup Failed", "Error creating your account");
  } finally {
    yield put(finishLoading());
  }
}

const firebaseLogin = ({ email, password }) =>
  authentication
    .signInWithEmailAndPassword(email, password)
    .then((success) => success);

function* userLoginHandler(values) {
  try {
    yield put(startLoading());
    yield call(firebaseLogin, values.data);
  } catch (error) {
    Alert.alert("Login Failed", "Invalid credentials");
  } finally {
    yield put(finishLoading());
  }
}

function* userLogoutHandler({ data }) {
  try {
    yield call([authentication, authentication.signOut]);
    const ref = database.ref(`online/${data.uid}`);
    yield call([ref, ref.remove]);
  } catch (error) {
    console.log("sign out failed", error);
  }
}

function* userLogoutWatcher() {
  yield takeEvery(CONSTANTS.LOGOUT, userLogoutHandler);
}

function* userRegisterWatcher() {
  yield takeEvery(CONSTANTS.REGISTER, userRegisterHandler);
}

function* userLoginWatcher() {
  yield takeEvery(CONSTANTS.LOGIN, userLoginHandler);
}

function* onlinenWatcher() {
  yield takeEvery(CONSTANTS.ONLINE, onlinenHandler);
}

function* startUserCountListener() {
  const channel = new eventChannel((emiter) => {
    const listener = database.ref("online").on("value", (snapshot) => {
      const users = [];

      snapshot.forEach((snap) => {
        users.push({ ...snap.val(), id: snap.key });
      });

      emiter({ data: users });
    });

    return () => listener.off();
  });

  while (true) {
    const { data } = yield take(channel);
    yield put(setOnlineUsersCounter(data));
  }
}

function* startUserCountListenerWatcher() {
  yield fork(startUserCountListener);
}

function* getOnlineUserListHandler() {
  const ref = database.ref("online");

  const callback = (snapshot) => {
    const users = [];
    snapshot.forEach((snap) => {
      users.push({ ...snap.val(), id: snap.key });
    });
  };

  const users = yield call([ref, ref.once], "value", callback);

  yield put(setOnlineUsersCounter(users));
}

function* onlineUserListWatcher() {
  yield takeEvery(CONSTANTS.ONLINE_USERS_LIST, getOnlineUserListHandler);
}

export default [
  userRegisterWatcher,
  userLoginWatcher,
  userLogoutWatcher,
  onlinenWatcher,
  startUserCountListenerWatcher,
  onlineUserListWatcher,
];
