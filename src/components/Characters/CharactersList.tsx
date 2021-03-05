import React from 'react';
import { Character } from '../../state/types';
import CharacterListItem from './CharacterListItem';
import { StyledCharactersList } from './CharactersList.styled';

type CharactersListProps =  {
    characters: Character[]
}

const CharactersList = ({ characters }: CharactersListProps) => {
    const renderCharacter = (character: Character) => {
        return (
            <CharacterListItem key={character.id} character={character} />
        )
    }

    const renderCharactersList = () => {
        return characters.map(character => renderCharacter(character))
    }

    return (
        <StyledCharactersList>{ renderCharactersList() }</StyledCharactersList>
    )
}

export default CharactersList