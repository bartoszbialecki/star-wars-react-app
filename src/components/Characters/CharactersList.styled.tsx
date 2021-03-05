import styled from 'styled-components';

const StyledCharactersList = styled.ul`
    display: grid;
    gap: 2.5rem;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    margin: 2em 0;
`

export { StyledCharactersList }