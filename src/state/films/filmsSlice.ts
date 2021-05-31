import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { ResourceId } from '../types';
import { Film } from './types';
import initialState from './initialState';

export interface FetchFilmsPayloadAction {
    filmIds: ResourceId[];
}

const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    fetchFilms: (state, action: PayloadAction<FetchFilmsPayloadAction>) => {
      state.loading = true;
      state.error = null;
    },
    fetchFilmsSuccess: (state, action: PayloadAction<Array<Film>>) => {
      state.loading = false;
      state.films = [...state.films, ...action.payload];
    },
    fetchFilmsError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchCharacterFilmsSuccess: (state, action: PayloadAction<Array<Film>>) => {
      state.selectedCharacterFilms = action.payload;
    },
  },
});

export const {
  fetchCharacterFilmsSuccess, fetchFilms, fetchFilmsError, fetchFilmsSuccess,
} = filmsSlice.actions;

export const selectFilms = (state: RootState) => state.films.films;

export default filmsSlice.reducer;
