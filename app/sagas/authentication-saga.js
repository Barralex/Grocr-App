import { takeEvery, call } from "redux-saga/effects";
import { authentication, database } from "../services/firebase";
import CONSTANTS from "../store/CONSTANTS";

const firebaseRegister = (values) =>
  authentication
    .createUserWithEmailAndPassword(values.email, values.password)
    .then((success) => success);

const userDatabasaRegister = ({ uid, email, name }) =>
  database.ref(`users/${uid}`).set({
    username: name,
    email,
  });

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
    const result = yield call(firebaseLogin, values.data);
    console.log("sign in success:", result);
  } catch (error) {
    console.log("sign in failed:", error);
  }
}

function* userLogoutHandler() {
  try {
    yield call(authentication.signOut());
    console.log("sign out success");
  } catch {
    console.log("sign out failed");
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

export default [userRegisterWatcher, userLoginWatcher, userLogoutWatcher];
