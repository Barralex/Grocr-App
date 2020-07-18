import { database } from "../services/firebase";
import { takeEvery, call, put, getContext } from "redux-saga/effects";
import CONSTANTS from "../store/CONSTANTS";

function* setGroceryItemWatcher() {
  yield takeEvery(CONSTANTS.SET_ITEM, setGroceryItemHandler);
}

const setGroceryItem = (values) => {
  const ref = database.ref("grocery-items/" + values.name);
  ref.set({ name: values.name, addByUser: values.addByUser, done: false });
};

function* setGroceryItemHandler(values) {
  const navigationService = yield getContext("navigation");
  try {
    yield call(setGroceryItem, values.data);
    navigationService.navigate("GroceryList");
  } catch (error) {
    console.log("setGroceryItemHandler error:", error);
  }
}

export default [setGroceryItemWatcher];
