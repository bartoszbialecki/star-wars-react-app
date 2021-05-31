import { Planet } from '../planets';
import { PagedData, Resource, ResourceId } from '../types';

export interface Character extends Resource {
  name: string;
  homeworld: Planet;
  filmIds: ResourceId[];
}

export interface CharactersState {
  readonly characters: PagedData<Character>;
  readonly selectedCharacter: Character | null;
  readonly loading: boolean;
  readonly error: string | null;
  readonly page: number;
}
