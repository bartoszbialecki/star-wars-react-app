import { combineReducers, Reducer } from "redux";
import { all, fork } from "redux-saga/effects";

import { default as charactersReducer } from "./reducers";
import { CharactersState } from "./types";
import charactersSaga from "./sagas";

export interface AppState {
  characters: CharactersState;
}

export const rootReducer: Reducer<AppState> = combineReducers<AppState>({
  characters: charactersReducer,
});

export function* rootSaga() {
  yield all([fork(charactersSaga)]);
}
