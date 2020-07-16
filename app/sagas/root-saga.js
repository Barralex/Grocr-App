import { fork, all } from "redux-saga/effects";
import auth from "../sagas/authentication-saga";
import groceryItems from "../sagas/grocery-saga";

const forkList = (sagaList) => sagaList.map((saga) => fork(saga));

export default function* rootSaga() {
  yield all([...forkList(auth), ...forkList(groceryItems)]);
}
