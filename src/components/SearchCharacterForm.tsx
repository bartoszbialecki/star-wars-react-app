import React, { ChangeEvent, FormEvent, useState } from 'react';

type Props = {
    searchCharacter: (searchValue: string) => void
}

const SearchCharacterForm = ({ searchCharacter }: Props) => {
    const [searchValue, setSearchValue] = useState("")

    const handleSearchValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
    }

    const handleFormSubmit = (e: FormEvent) => {
        e.preventDefault()

        searchCharacter(searchValue)
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input
                type="text"
                name="search"
                placeholder="Search a character"
                onChange={handleSearchValueChange}
            />
            <button>Search</button>
        </form>
    )
}

export default SearchCharacterForm