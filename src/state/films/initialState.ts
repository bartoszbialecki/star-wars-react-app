import { FilmsState } from './types';

const initialState: FilmsState = {
  films: [],
  selectedCharacterFilms: [],
  loading: false,
  error: null,
};

export default initialState;
