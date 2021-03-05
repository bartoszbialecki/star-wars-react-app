import React from 'react';
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

import CharactersListContainer from './containers/CharactersListContainer';

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <h1>Star Wars</h1>
      <CharactersListContainer />
    </ThemeProvider>
  );
}

export default App;
