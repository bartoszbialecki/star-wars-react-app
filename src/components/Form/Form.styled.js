import styled from "styled-components";

const StyledForm = styled.form`
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  margin: 0 auto;
  overflow: hidden;
  padding: 4rem 2rem;
  text-align: left;
  width: 600px;
`;

export { StyledForm };
