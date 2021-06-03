import {connectRouter} from "connected-react-router";
import {Action, ThunkAction} from "@reduxjs/toolkit";
import {MainApiInterface, MainApiReducer, MainApiSaga,} from "../pages/MainPage/api/MainAPI";
import {all} from "redux-saga/effects"
import {createBrowserHistory} from "history";

export const history = createBrowserHistory();

export interface RootState {
  // API
  mainApiSlice?: MainApiInterface;
  // Containers

  // Router
  router?: any;
}

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export const mainReducers = {
  // API
  mainApiSlice: MainApiReducer,
  // Containers

  // Router
  router: connectRouter(history),
};

/**
 * IMPORT EVERY OTHER NOT SOMEWHERE ELSE INJECTED SAGA
 */
export default function* rootSaga() {
  yield all([MainApiSaga()]);
}
