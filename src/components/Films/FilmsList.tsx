import React from 'react';

import { Film } from '../../state/films';

import FilmListItem from './FilmListItem';
import { StyledFilmsList } from './FilmsList.styled';

type FilmsListProps = {
    films: Film[]
}

const FilmsList = ({ films }: FilmsListProps) => {
  const renderFilm = (film: Film) => (
    <FilmListItem key={film.id} film={film} />
  );

  const renderFilmsList = () => films.map((film) => renderFilm(film));

  return (
    <StyledFilmsList>{ renderFilmsList() }</StyledFilmsList>
  );
};

export default FilmsList;
