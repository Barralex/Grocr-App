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

function* sagaRegister(values) {
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

function* sagaLogin(values) {
  try {
    const result = yield call(firebaseLogin, values.data);
    console.log("sign in success:", result);
  } catch (error) {
    console.log("sign in failed:", error);
  }
}

export default function* authFunction() {
  yield takeEvery(CONSTANTS.REGISTER, sagaRegister);
  yield takeEvery(CONSTANTS.LOGIN, sagaLogin);
}
