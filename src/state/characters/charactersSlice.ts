import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { PagedData } from '../types';
import { Character } from './types';
import initialState from './initialState';

export interface FetchCharactersActionPayload {
    searchValue: string;
    page: number;
}

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    fetchCharacters: (state, action: PayloadAction<FetchCharactersActionPayload>) => {
      state.loading = true;
      state.error = null;

      if (action.payload.page === 1) {
        state.characters.data = [];
      }
    },
    fetchCharactersSuccess: (state, action: PayloadAction<PagedData<Character>>) => {
      const characters = action.payload;
      const nextPage = characters.hasMoreData ? state.page + 1 : 1;

      state.loading = false;
      state.page = nextPage;
      state.characters.count = characters.count;
      state.characters.hasMoreData = characters.hasMoreData;
      state.characters.data = [...state.characters.data, ...characters.data];
    },
    fetchCharactersError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    selectCharacter: (state, action: PayloadAction<Character | null>) => {
      state.selectedCharacter = action.payload;
    },
  },
});

export const {
  fetchCharacters, fetchCharactersError, fetchCharactersSuccess, selectCharacter,
} = charactersSlice.actions;

export const selectCharacters = (state: RootState) => state.characters.characters.data;

export default charactersSlice.reducer;
