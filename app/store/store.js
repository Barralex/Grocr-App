import { createStore, combineReducers, applyMiddleware } from "redux";
import CONSTANTS from "./CONSTANTS";
import { reducer as form } from "redux-form";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas/root-saga";

const reducerSession = (state = null, action) => {
  switch (action.type) {
    case CONSTANTS.SET_SESSION:
      return { ...action.user };

    case CONSTANTS.CLOSE_SESSION:
      return null;

    default:
      return state;
  }
};

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  reducerSession,
  form,
});

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
