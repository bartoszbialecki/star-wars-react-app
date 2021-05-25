import { Resource } from "../types";

export interface Film extends Resource {
  title: string;
  releaseDate: string;
  openingCrawl: string;
}

export interface FilmsState {
  readonly films: Film[];
  readonly selectedCharacterFilms: Film[];
  readonly loading: boolean;
  readonly error: string | null;
}