import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../state/index'
import CharactersList from '../components/Characters/CharactersList';
import SearchCharacterForm from '../components/Characters/SearchCharacterForm';
import { fetchCharacters } from '../state/actions';
import Text from '../components/Text';

const CharactersListContainer = () => {
    const { characters, loading, page, error } = useSelector((state: AppState) => state.characters)
    const [searchValue, setSearchValue] = useState("")

    const dispatch = useDispatch()

    const onSearchCharacter = useCallback((value: string) => {
        setSearchValue(value)
        dispatch(fetchCharacters(value, 1))
    }, [dispatch])

    const handleLoadMoreCharacters = () => {
        dispatch(fetchCharacters(searchValue, page))
    }

    return (
        <>
            <SearchCharacterForm searchCharacter={onSearchCharacter} />
            <CharactersList characters={characters.data} />
            {characters.hasMoreData && <button onClick={handleLoadMoreCharacters}>Load more characters</button>}
            {loading && <span>Loading...</span>}
            {!loading && characters.data.length === 0 && <Text>No characters found.</Text>}
            {!loading && error && <p>{error}</p>}
        </>
    )
}

export default CharactersListContainer