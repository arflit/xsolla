import React from 'react';
import { filter } from '../App';
import './Menu.css';

const monthNames = [
  'show all',
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

type menuProps = {
  filters: filter;
  setFilters: React.Dispatch<filter>;
};
export const Menu = ({ filters, setFilters }: menuProps) => {
  const onChangeCity = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setFilters({
      ...filters,
      city: value,
    });
  };
  const onChangeMonth = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setFilters({
      ...filters,
      month: Number(value),
    });
  };
  const onChangeFavorites = () => {
    setFilters({
      ...filters,
      favorites: !filters.favorites,
    });
  };
  return (
    <nav className="nav">
      <label htmlFor="setCitySelect">
        City:
        <select value={filters.city} onChange={onChangeCity} id="setCitySelect">
          {filters.cityList.map((city, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <option key={i}>{city}</option>
          ))}
        </select>
      </label>
      <label htmlFor="setMonthSelect">
        Month:
        <select value={filters.month} onChange={onChangeMonth} id="setMonthSelect">
          {filters.monthList.map((month) => (
            // eslint-disable-next-line react/no-array-index-key
            <option key={month} value={month}>
              {monthNames[month]}
            </option>
          ))}
        </select>
      </label>
      <button
        className={filters.favorites ? 'nav__favorites-button_enabled' : 'nav__favorites-button_disabled'}
        type="button"
        onClick={onChangeFavorites}
      >
        избранное
      </button>
    </nav>
  );
};
