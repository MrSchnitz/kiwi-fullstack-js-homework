import { routerMiddleware } from "connected-react-router";
import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import rootSaga, { mainReducers } from "./RootState";
import createSagaMiddleware from "redux-saga";
import { history } from "./RootState";

export function configureAppStore() {
  const reduxSagaMonitorOptions = {};
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);

  // Create the store with saga middleware and router middleware
  const middlewares = [sagaMiddleware, routerMiddleware(history)];

  const store = configureStore({
    reducer: combineReducers({ ...mainReducers }),
    middleware: [...getDefaultMiddleware(), ...middlewares],
    devTools: process.env.NODE_ENV !== "production",
  });

  // Add all combined Sagas to middleware
  sagaMiddleware.run(rootSaga);

  return store;
}
