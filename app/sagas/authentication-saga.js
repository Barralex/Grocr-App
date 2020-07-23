import { takeEvery, call } from "redux-saga/effects";
import { authentication, database } from "../services/firebase";
import CONSTANTS from "../store/CONSTANTS";
import { Alert } from "react-native";

const firebaseRegister = (values) =>
  authentication
    .createUserWithEmailAndPassword(values.email, values.password)
    .then((success) => success);

const userDatabasaRegister = ({ uid, email, name }) =>
  database.ref(`users/${uid}`).set({
    username: name,
    email,
  });

function* onlinenHandler({ data }) {
  const onlineRef = database.ref(`online/${data.uid}`);

  onlineRef.set({
    email: data.email,
  });

  onlineRef.onDisconnect().remove();
}

function* userRegisterHandler(values) {
  try {
    const register = yield call(firebaseRegister, values.data);
    const { email, uid } = register.user;
    const {
      data: { name },
    } = values;
    yield call(userDatabasaRegister, { uid, email, name });
  } catch (error) {
    console.log(error);
  }
}

const firebaseLogin = ({ email, password }) =>
  authentication
    .signInWithEmailAndPassword(email, password)
    .then((success) => success);

function* userLoginHandler(values) {
  try {
    yield call(firebaseLogin, values.data);
  } catch (error) {
    Alert.alert("Login Failed", "Invalid credentials");
  }
}

function* userLogoutHandler({ data }) {
  console.log(data);
  try {
    yield call(authentication.signOut());
    yield call(database.ref(`online/${data.uid}`).remove());
    console.log("sign out success");
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

export default [
  userRegisterWatcher,
  userLoginWatcher,
  userLogoutWatcher,
  onlinenWatcher,
];
