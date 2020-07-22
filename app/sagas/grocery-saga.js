import { database, getServerTime } from "../services/firebase";
import {
  takeEvery,
  call,
  put,
  getContext,
  take,
  fork,
} from "redux-saga/effects";
import CONSTANTS from "../store/CONSTANTS";
import { eventChannel } from "redux-saga";
import { updateGroceryList } from "./../store/ACTIONS";

function* setGroceryItemWatcher() {
  yield takeEvery(CONSTANTS.SET_ITEM, setGroceryItemHandler);
}

const setGroceryItem = (values) => {
  const ref = database.ref("grocery-items/" + values.title);
  ref.set({ ...values, time: getServerTime() });
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

function* startListenerWatcher() {
  yield fork(startListenerHandler);
}

function* startListenerHandler() {
  const channel = new eventChannel((emiter) => {
    const listener = database
      .ref("grocery-items")
      .orderByChild("completed")
      .on("value", (snapshot) => {
        const groceries = [];
        snapshot.forEach((snap) => {
          let item = snap.val();
          item.id = snap.key;
          groceries.push(item);
        });
        emiter({ data: groceries || {} });
      });

    return () => {
      listener.off();
    };
  });

  while (true) {
    const { data } = yield take(channel);
    yield put(updateGroceryList(data));
  }
}

const deleteGroceryItem = (values) => {
  const ref = database.ref("grocery-items/" + values);
  return ref.remove();
};

function* deleteGroceryItemHandler(values) {
  try {
    yield call(deleteGroceryItem, values.data);
  } catch (error) {
    console.log("deleteGroceryItemHandler error:", error);
  }
}

function* deleteGroceryItemWatcher() {
  yield takeEvery(CONSTANTS.DELETE_GROCERY_LIST, deleteGroceryItemHandler);
}

export default [
  setGroceryItemWatcher,
  startListenerWatcher,
  deleteGroceryItemWatcher,
];
