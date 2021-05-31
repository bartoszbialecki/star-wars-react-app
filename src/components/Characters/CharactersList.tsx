import React from 'react';

import { Character } from '../../state/characters';

import CharacterListItem from './CharacterListItem';
import { StyledCharactersList } from './CharactersList.styled';

type CharactersListProps = {
    characters: Character[]
    onCharacterSelect: (character: Character) => void
}

const CharactersList = ({ characters, onCharacterSelect }: CharactersListProps) => {
  const renderCharacter = (character: Character) => (
    <CharacterListItem key={character.id} character={character} onClick={onCharacterSelect} />
  );

  const renderCharactersList = () => characters.map((character) => renderCharacter(character));

  return (
    <StyledCharactersList>{ renderCharactersList() }</StyledCharactersList>
  );
};

export default CharactersList;
