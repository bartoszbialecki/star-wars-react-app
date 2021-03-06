import {
  CharacterActions,
  CharacterActionTypes,
  CharactersState,
  FilmActions,
  FilmActionTypes,
  FilmsState,
} from "./types";

const initialCharactersState: CharactersState = {
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

const charactersReducer = (
  state: CharactersState = initialCharactersState,
  action: CharacterActions
): CharactersState => {
  switch (action.type) {
    case CharacterActionTypes.FETCH_CHARACTERS:
      return {
        ...state,
        loading: true,
        error: null,
        characters:
          action.payload.page === 1
            ? { ...state.characters, data: [] }
            : state.characters,
      };
    case CharacterActionTypes.FETCH_CHARACTERS_SUCCESS:
      const { characters } = action.payload;
      const nextPage = characters.hasMoreData ? state.page + 1 : 1;

      return {
        ...state,
        loading: false,
        page: nextPage,
        characters: {
          count: characters.count,
          hasMoreData: characters.hasMoreData,
          data: [...state.characters.data, ...characters.data],
        },
      };
    case CharacterActionTypes.FETCH_CHARACTERS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case CharacterActionTypes.SELECT_CHARACTER:
      return {
        ...state,
        selectedCharacter: action.payload.character,
      };
    default:
      return state;
  }
};

const initialFilmsState: FilmsState = {
  films: [],
  selectedCharacterFilms: [],
  loading: false,
  error: null,
};

const filmsReducer = (
  state: FilmsState = initialFilmsState,
  action: FilmActions
): FilmsState => {
  switch (action.type) {
    case FilmActionTypes.FETCH_FILMS:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case FilmActionTypes.FETCH_FILMS_SUCCESS:
      return {
        ...state,
        loading: false,
        films: [...state.films, ...action.payload.films],
      };
    case FilmActionTypes.FETCH_FILMS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case FilmActionTypes.FETCH_CHARACTER_FILMS_SUCCESS:
      return {
        ...state,
        selectedCharacterFilms: action.payload.films,
      };
    default:
      return state;
  }
};

export { charactersReducer, filmsReducer };
