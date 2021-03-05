import styled from "styled-components";

const StyledInput = styled.input`
  background-color: ${({ theme }) => theme.componentBackgroundColor};
  border: none;
  border-radius: 50px;
  box-shadow: ${({ theme }) => theme.activeBoxShadow};
  color: ${({ theme }) => theme.primaryColor};
  font-size: 1.6em;
  outline: none;
  padding: 0.6em 1.5em;
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.placeholderColor};
  }
`;

export { StyledInput };
