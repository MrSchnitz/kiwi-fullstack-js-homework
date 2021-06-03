import {createSelector, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {all, call, delay, put, select, takeLatest} from "redux-saga/effects";
import {RootState} from "../../../internals/RootState";
import {WordType} from "../../../models/Word";
import {ENV} from "../../../internals/utils";

/**
 * API State interface
 */
export interface MainApiInterface {
  numbers: number[];
  text: string;
  predictionWordsLoading: boolean;
  predictionWords: WordType[];
}

/**
 * MainAPI
 */
class MainApi {
  private static instance: MainApi;

  private constructor() {
    this.handleT9Number = this.handleT9Number.bind(this);
    this.saga = this.saga.bind(this);
  }

  public static getInstance(): MainApi {
    if (MainApi.instance) {
      return this.instance;
    }
    this.instance = new MainApi();
    return this.instance;
  }

  /*
   * SLICE
   */
  private getInitialState(): MainApiInterface {
    return {
      numbers: [],
      text: "",
      predictionWordsLoading: false,
      predictionWords: [],
    };
  }

  public slice = createSlice({
    name: "mainApiSlice",
    initialState: this.getInitialState(),
    reducers: {
      addNumber(state, action: PayloadAction<number>) {
        state.numbers.push(action.payload);
      },
      changeText(state, action: PayloadAction<WordType>) {
        state.numbers.length = 0;
        state.text = state.text.concat(action.payload.word + " ");
      },
      deleteText(state, action: PayloadAction<undefined>) {
        if (state.numbers.length > 0) {
          state.numbers.pop();
        } else {
          state.text[state.text.length - 1] === " "
            ? (state.text = state.text.slice(0, -2))
            : (state.text = state.text.slice(0, -1));
        }

        if (state.numbers.length === 0) {
          state.predictionWords.length = 0;
        }
      },
      predictionWordsLoading(state, action: PayloadAction<boolean>) {
        state.predictionWordsLoading = action.payload;
      },
      addPredictionWords(state, action: PayloadAction<WordType[]>) {
        state.predictionWordsLoading = false;
        state.predictionWords.length = 0;
        state.predictionWords.push(...(action.payload as any));
      },
    },
  });

  /*
   * SAGAS
   */
  private *handleT9Number(action: PayloadAction<string>): Generator<any> {
    yield delay(500);

    const numbers: any = yield select(
      (state: RootState) => state.mainApiSlice?.numbers
    );

    if (numbers.length > 0) {
      yield put(this.slice.actions.predictionWordsLoading(true));

      try {
        const request = () =>
          fetch(`${ENV}/${numbers.toString().replace(/,/g, "")}`, {
            method: "GET",
          }).then((res) => res.json());

        const response = yield call(request);

        yield delay(500);

        yield put(this.slice.actions.addPredictionWords(response as any));
      } catch (e) {
        console.log(e);
      }
    }
  }

  /*
   * SAGA - MAIN
   */
  public *saga(): Generator<any> {
    const { addNumber, deleteText } = this.slice.actions;
    yield all([
      yield takeLatest([addNumber.type, deleteText.type], this.handleT9Number),
    ]);
  }

  /*
   * SELECTORS
   */
  private selectDomain(state: RootState) {
    return state.mainApiSlice || this.getInitialState();
  }

  public selectNumbers = createSelector(
    [this.selectDomain],
    (mainApiState) => mainApiState.numbers
  );

  public selectText = createSelector(
    [this.selectDomain],
    (mainApiState) => mainApiState.text
  );

  public selectPredictionWords = createSelector(
    [this.selectDomain],
    (mainApiState) => mainApiState.predictionWords
  );

  public selectPredictionWordsLoading = createSelector(
    [this.selectDomain],
    (mainApiState) => mainApiState.predictionWordsLoading
  );
}

export const {
  actions: MainAPI,
  reducer: MainApiReducer,
  name: MainApiName,
} = MainApi.getInstance().slice;

export const {
  selectNumbers,
  selectText,
  selectPredictionWords,
  selectPredictionWordsLoading,
  saga: MainApiSaga,
} = MainApi.getInstance();
