import {
  Character,
  CharacterActionTypes,
  FetchCharacterFilmsSuccessAction,
  FetchCharactersAction,
  FetchCharactersErrorAction,
  FetchCharactersSuccessAction,
  FetchFilmsAction,
  FetchFilmsErrorAction,
  FetchFilmsSuccessAction,
  Film,
  FilmActionTypes,
  PagedData,
  ResourceId,
  SelectCharacterAction,
} from "./types";

export function fetchCharacters(
  searchValue: string,
  page: number
): FetchCharactersAction {
  return {
    type: CharacterActionTypes.FETCH_CHARACTERS,
    payload: { searchValue, page },
  };
}

export function fetchCharactersSuccess(
  characters: PagedData<Character>
): FetchCharactersSuccessAction {
  return {
    type: CharacterActionTypes.FETCH_CHARACTERS_SUCCESS,
    payload: { characters },
  };
}

export function fetchCharactersError(
  error: string
): FetchCharactersErrorAction {
  return {
    type: CharacterActionTypes.FETCH_CHARACTERS_ERROR,
    payload: { error },
  };
}

export function selectCharacter(
  character: Character | null
): SelectCharacterAction {
  return {
    type: CharacterActionTypes.SELECT_CHARACTER,
    payload: { character },
  };
}

export function fetchFilms(filmIds: ResourceId[]): FetchFilmsAction {
  return {
    type: FilmActionTypes.FETCH_FILMS,
    payload: { filmIds },
  };
}

export function fetchFilmsSuccess(films: Film[]): FetchFilmsSuccessAction {
  return {
    type: FilmActionTypes.FETCH_FILMS_SUCCESS,
    payload: { films },
  };
}

export function fetchFilmsError(error: string): FetchFilmsErrorAction {
  return {
    type: FilmActionTypes.FETCH_FILMS_ERROR,
    payload: { error },
  };
}

export function fetchCharacterFilmsSuccess(
  films: Film[]
): FetchCharacterFilmsSuccessAction {
  return {
    type: FilmActionTypes.FETCH_CHARACTER_FILMS_SUCCESS,
    payload: { films },
  };
}
