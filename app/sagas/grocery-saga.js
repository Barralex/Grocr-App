import { database } from "../services/firebase";
import { takeEvery, call } from "redux-saga/effects";
import CONSTANTS from "../store/CONSTANTS";

function* setGroceryItemWatcher() {
  yield takeEvery(CONSTANTS.SET_ITEM, setGroceryItemHandler);
}

const setGroceryItem = (values) => {
  const ref = database.ref("grocery-items/" + values.name);
  ref.set({ name: values.name, addByUser: values.addByUser, done: false });
};

function* setGroceryItemHandler(values) {
  try {
    yield call(setGroceryItem, values.data);
  } catch (error) {
    console.log("setGroceryItemHandler error:", error);
  }
}

export default [setGroceryItemWatcher];
