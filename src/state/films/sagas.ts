import { PayloadAction } from '@reduxjs/toolkit';
import {
  all, call, fork, put, select, takeLatest,
} from 'redux-saga/effects';

import { starWarsApi } from '../../services/starWarsApi';
import { ResourceId } from '../types';

import {
  fetchCharacterFilmsSuccess, fetchFilms, fetchFilmsError, FetchFilmsPayloadAction, fetchFilmsSuccess, selectFilms,
} from './filmsSlice';
import { Film } from './types';

const findFilm = (filmId: ResourceId, films: Film[]) => films.find((film) => film.id === filmId);

function* handleFilmsFetch(action: PayloadAction<FetchFilmsPayloadAction>) {
  const { filmIds } = action.payload;
  const characterFilms: Film[] = [];
  const filmIdsToFetch: ResourceId[] = [];
  const films: Film[] = yield select(selectFilms);

  filmIds.forEach((filmId) => {
    const foundFilm = findFilm(filmId, films);

    if (foundFilm) {
      characterFilms.push(foundFilm);
    } else {
      filmIdsToFetch.push(filmId);
    }
  });

  try {
    const result: Film[] = yield all(
      filmIdsToFetch.map((filmId) => call([starWarsApi, starWarsApi.fetchFilm], filmId)),
    );

    characterFilms.push(...result);

    yield put(fetchFilmsSuccess(result));
    yield put(fetchCharacterFilmsSuccess(characterFilms));
  } catch (error) {
    yield put(fetchFilmsError(error.message));
  }
}

function* watchFetchFilms(): Generator {
  yield takeLatest(fetchFilms.type, handleFilmsFetch);
}

export function* filmsSaga() {
  yield all([fork(watchFetchFilms)]);
}
