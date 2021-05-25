import { PayloadAction } from "@reduxjs/toolkit";
import { all, call, fork, put, takeLatest } from "redux-saga/effects";

import { starWarsApi } from "../../services/starWarsApi";
import { PagedData } from "../types";
import { fetchCharacters, FetchCharactersActionPayload, fetchCharactersError, fetchCharactersSuccess } from './charactersSlice'
import { Character } from "./types";

function* handleCharactersFetch(action: PayloadAction<FetchCharactersActionPayload>) {
  const { searchValue, page } = action.payload;

  try {
    const result: PagedData<Character> = yield call(
      [starWarsApi, starWarsApi.fetchCharacters],
      searchValue,
      page
    );

    yield put(fetchCharactersSuccess(result));
  } catch (error) {
    yield put(fetchCharactersError(error.message));
  }
}

function* watchFetchCharacters(): Generator {
  yield takeLatest(fetchCharacters.type, handleCharactersFetch);
}

export function* charactersSaga() {
  yield all([fork(watchFetchCharacters)]);
}
