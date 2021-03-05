import styled from 'styled-components';

const StyledCharactersListItem = styled.li`
    border-radius: 10px;
    box-shadow: ${({ theme }) => theme.boxShadow};
    padding: 1em 2em;
    width: 500px;
`

export { StyledCharactersListItem }