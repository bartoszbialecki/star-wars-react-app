import { CharactersState } from './types';

const initialState: CharactersState = {
  characters: {
    count: 0,
    hasMoreData: false,
    data: [],
  },
  selectedCharacter: null,
  loading: false,
  error: null,
  page: 1,
};

export default initialState;
