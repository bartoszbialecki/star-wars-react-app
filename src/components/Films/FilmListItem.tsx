import React from 'react';

import { Film } from '../../state/films';

import { truncateText } from '../../utils/text';

type Props = {
  film: Film;
};

const TRUNCATE_CHARS_COUNT = 130;

const FilmListItem = ({ film }: Props) => {
  const { title, releaseDate, openingCrawl } = film;

  return (
    <li>
      <h3>{title}</h3>
      <p>{new Date(releaseDate).toLocaleDateString()}</p>
      <p>{truncateText(openingCrawl, TRUNCATE_CHARS_COUNT)}</p>
    </li>
  );
};

export default FilmListItem;
