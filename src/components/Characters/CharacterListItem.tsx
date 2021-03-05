import React from 'react';
import { Character } from '../../state/types';
import { StyledCharactersListItem } from './CharactersListItem.styled';

type Props = {
    character: Character
}

const CharacterListItem = ({ character }: Props) => {
    const { name, population } = character.homeworld

    return (
        <StyledCharactersListItem>
            <h3>{character.name}</h3>
            <p>Homeworld: {name}, Population: {population}</p>
        </StyledCharactersListItem>
    )
}

export default CharacterListItem