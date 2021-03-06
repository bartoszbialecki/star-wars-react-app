export type ResourceUrl = string;
export type ResourceId = number;

export interface Resource {
  id: ResourceId;
}

export interface PagedData<T> {
  count: number;
  hasMoreData: boolean;
  data: T[];
}

export interface Planet extends Resource {
  name: string;
  population: string;
}

export interface Character extends Resource {
  name: string;
  homeworld: Planet;
  filmIds: ResourceId[];
}

export interface Film extends Resource {
  title: string;
  releaseDate: Date;
  openingCrawl: string;
}

export interface CharactersState {
  readonly characters: PagedData<Character>;
  readonly selectedCharacter: Character | null;
  readonly loading: boolean;
  readonly error: string | null;
  readonly page: number;
}

export interface FilmsState {
  readonly films: Film[];
  readonly selectedCharacterFilms: Film[];
  readonly loading: boolean;
  readonly error: string | null;
}

export enum CharacterActionTypes {
  FETCH_CHARACTERS = "@@characters/FETCH_CHARACTERS",
  FETCH_CHARACTERS_SUCCESS = "@@characters/FETCH_CHARACTERS_SUCCESS",
  FETCH_CHARACTERS_ERROR = "@@characters/FETCH_CHARACTERS_ERROR",
  SELECT_CHARACTER = "@@characters/SELECT_CHARACTER",
}

export enum FilmActionTypes {
  FETCH_FILMS = "@@films/FETCH_FILMS",
  FETCH_FILMS_SUCCESS = "@@films/FETCH_FILMS_SUCCESS",
  FETCH_FILMS_ERROR = "@@films/FETCH_FILMS_ERROR",
  FETCH_CHARACTER_FILMS_SUCCESS = "@@films/FETCH_CHARACTER_FILMS_SUCCESS",
}

export interface FetchCharactersAction {
  type: CharacterActionTypes.FETCH_CHARACTERS;
  payload: {
    searchValue: string;
    page: number;
  };
}

export interface FetchCharactersSuccessAction {
  type: CharacterActionTypes.FETCH_CHARACTERS_SUCCESS;
  payload: {
    characters: PagedData<Character>;
  };
}

export interface FetchCharactersErrorAction {
  type: CharacterActionTypes.FETCH_CHARACTERS_ERROR;
  payload: {
    error: string;
  };
}

export interface SelectCharacterAction {
  type: CharacterActionTypes.SELECT_CHARACTER;
  payload: {
    character: Character | null;
  };
}

export interface FetchFilmsAction {
  type: FilmActionTypes.FETCH_FILMS;
  payload: {
    filmIds: ResourceId[];
  };
}
export interface FetchFilmsSuccessAction {
  type: FilmActionTypes.FETCH_FILMS_SUCCESS;
  payload: {
    films: Film[];
  };
}

export interface FetchFilmsErrorAction {
  type: FilmActionTypes.FETCH_FILMS_ERROR;
  payload: {
    error: string;
  };
}

export interface FetchCharacterFilmsSuccessAction {
  type: FilmActionTypes.FETCH_CHARACTER_FILMS_SUCCESS;
  payload: {
    films: Film[];
  };
}

export type CharacterActions =
  | FetchCharactersAction
  | FetchCharactersSuccessAction
  | FetchCharactersErrorAction
  | SelectCharacterAction;

export type FilmActions =
  | FetchFilmsAction
  | FetchFilmsSuccessAction
  | FetchFilmsErrorAction
  | FetchCharacterFilmsSuccessAction;
