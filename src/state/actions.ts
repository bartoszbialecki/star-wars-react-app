import {
  Character,
  CharacterActionTypes,
  FetchCharactersAction,
  FetchCharactersErrorAction,
  FetchCharactersSuccessAction,
  PagedData,
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
