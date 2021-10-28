import React, { useState } from 'react';
import './Menu.css';

export const Menu = () => {
  const [city, setCity] = useState('');
  const [month, setMonth] = useState('');
  const [favorites, setFavorites] = useState(false);
  const onChangeCity = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setCity(value);
  };
  const onChangeMonth = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setMonth(value);
  };
  const onChangeFavorites = () => {
    setFavorites(!favorites);
  };
  return (
    <nav className="nav">
      <label htmlFor="setCitySelect">
        City:
        <select value={city} onChange={onChangeCity} id="setCitySelect">
          <option>Пункт 1</option>
          <option>Пункт 2</option>
        </select>
      </label>
      <label htmlFor="setMonthSelect">
        Month:
        <select value={month} onChange={onChangeMonth} id="setMonthSelect">
          <option>Пункт 1</option>
          <option>Пункт 2</option>
        </select>
      </label>
      <button
        className={favorites ? 'nav__favorites-button_enabled' : 'nav__favorites-button_disabled'}
        type="button"
        onClick={onChangeFavorites}
      >
        избранное
      </button>
    </nav>
  );
};
