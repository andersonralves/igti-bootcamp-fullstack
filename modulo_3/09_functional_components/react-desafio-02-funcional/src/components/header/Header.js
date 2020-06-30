import React from 'react';
import { formatNumber } from '../../helpers/formatHelpers';

import css from './header.module.css';

export default function Header({
  onChangeFilter,
  filter,
  countryCount,
  totalPopulation,
}) {
  const handleInputChange = (event) => {
    const newText = event.target.value;

    onChangeFilter(newText);
  };

  return (
    <div className={css.flexRow}>
      <input
        placeholder="Filtro"
        type="text"
        name=""
        id=""
        value={filter}
        onChange={handleInputChange}
      />{' '}
      |{' '}
      <span className={css.countries}>
        Países: <span className={css.spanContent}>{countryCount}</span>
      </span>{' '}
      |{' '}
      <span className={css.population}>
        População:{' '}
        <span className={css.spanContent}>{formatNumber(totalPopulation)}</span>
      </span>
    </div>
  );
}
