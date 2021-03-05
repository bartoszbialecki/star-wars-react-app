import React from 'react';
import { Character } from '../state/types';

type Props = {
    character: Character
}

const CharacterListItem = ({ character }: Props) => {
    return (
        <div>
            <h3>{character.name}</h3>
            <button>Show list of movies</button>
        </div>
    )
}

export default CharacterListItem