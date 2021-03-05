import React from 'react';
import { Character } from '../../state/types';

type Props = {
    character: Character
}

const CharacterListItem = ({ character }: Props) => {
    const { name, population } = character.homeworld

    return (
        <div>
            <h3>{character.name}</h3>
            <p>Homeworld: {name}, Population: {population}</p>
        </div>
    )
}

export default CharacterListItem