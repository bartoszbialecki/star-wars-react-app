import { combineReducers, Reducer } from "redux";
import { all, fork } from "redux-saga/effects";

import { charactersReducer, filmsReducer } from "./reducers";
import { CharactersState, FilmsState } from "./types";
import { charactersSaga, filmsSaga } from "./sagas";

export interface AppState {
  characters: CharactersState;
  films: FilmsState;
}

export const rootReducer: Reducer<AppState> = combineReducers<AppState>({
  characters: charactersReducer,
  films: filmsReducer,
});

export function* rootSaga() {
  yield all([fork(charactersSaga), fork(filmsSaga)]);
}
