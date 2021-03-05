import React, { useCallback, useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../state/index'
import CharactersList from '../components/Characters/CharactersList';
import SearchCharacterForm from '../components/Characters/SearchCharacterForm';
import { fetchCharacters } from '../state/actions';
import Text from '../components/Text';
import Button from '../components/Button';
import Loader from 'react-loader-spinner';
import { ThemeContext } from 'styled-components'

const CharactersListContainer = () => {
    const { characters, loading, page, error } = useSelector((state: AppState) => state.characters)
    const dispatch = useDispatch()
    const [searchValue, setSearchValue] = useState("")
    const themeContext = useContext(ThemeContext)

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
            {!loading && characters.hasMoreData && <Button onClick={handleLoadMoreCharacters}>Load more characters</Button>}
            {loading && (
                <Loader
                    type="Oval"
                    color={themeContext.accentColor}
                    height={40}
                    width={40}
                />
            )}
            {!loading && characters.data.length === 0 && <Text>No characters found.</Text>}
            {!loading && error && <p>{error}</p>}
        </>
    )
}

export default CharactersListContainer