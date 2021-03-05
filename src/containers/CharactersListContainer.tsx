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
import { StyledErrorMessage } from '../components/ErrorMessage/ErrorMessage.styled';

const CharactersListContainer = () => {
    const { characters, loading, page, error } = useSelector((state: AppState) => state.characters)
    const dispatch = useDispatch()
    const [searchValue, setSearchValue] = useState<string | null>(null)
    const themeContext = useContext(ThemeContext)

    const onSearchCharacter = useCallback((value: string) => {
        setSearchValue(value)
        dispatch(fetchCharacters(value, 1))
    }, [dispatch])

    const handleLoadMoreCharacters = () => {
        if (searchValue) {
            dispatch(fetchCharacters(searchValue, page))
        }
    }

    const showLoadMoreCharactersButton = () => {
        return !loading && characters.hasMoreData
    }

    const showNoCharactersInfo = () => {
        return !loading && !error && characters.data.length === 0 && searchValue !== null
    }

    const showError = () => {
        return !loading && error
    }

    return (
        <>
            <SearchCharacterForm searchCharacter={onSearchCharacter} />
            <CharactersList characters={characters.data} />
            {showLoadMoreCharactersButton() && <Button onClick={handleLoadMoreCharacters}>Load more characters</Button>}
            {loading && (
                <Loader
                    type="Oval"
                    color={themeContext.accentColor}
                    height={40}
                    width={40}
                />
            )}
            {showNoCharactersInfo() && <Text>No characters found.</Text>}
            {showError() && <StyledErrorMessage>{error}</StyledErrorMessage>}
        </>
    )
}

export default CharactersListContainer