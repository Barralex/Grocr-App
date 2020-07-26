import { createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as form } from "redux-form";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas/root-saga";
import {
  reducerSession,
  reducerGroceryItems,
  onlineUsers,
  reducerLoading,
} from "./reducers";
import navigationService from "../services/navigationService";

const sagaMiddleware = createSagaMiddleware({
  context: {
    navigation: navigationService,
  },
});

const reducers = combineReducers({
  reducerSession,
  form,
  reducerGroceryItems,
  onlineUsers,
  reducerLoading,
});

const store = createStore(reducers, applyMiddleware(...[sagaMiddleware]));

sagaMiddleware.run(rootSaga);

export default store;
