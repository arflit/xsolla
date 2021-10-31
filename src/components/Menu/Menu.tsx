import React from 'react';
import { filter } from '../App';
import './Menu.css';
import FavoriteIcon from '../../images/fav_black.png';
import FavoriteIconActive from '../../images/fav_black_active.png';

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
    <nav className="menu">
      <label htmlFor="setCitySelect" className="menu__label">
        City:
        <select className="menu__select" value={filters.city} onChange={onChangeCity} id="setCitySelect">
          {filters.cityList.map((city, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <option key={i}>{city}</option>
          ))}
        </select>
      </label>
      <label htmlFor="setMonthSelect" className="menu__label">
        Month:
        <select className="menu__select" value={filters.month} onChange={onChangeMonth} id="setMonthSelect">
          {filters.monthList.map((month) => (
            // eslint-disable-next-line react/no-array-index-key
            <option key={month} value={month}>
              {monthNames[month]}
            </option>
          ))}
        </select>
      </label>
      <button className="menu__favorites-button" type="button" onClick={onChangeFavorites}>
        {filters.favorites ? (
          <img src={FavoriteIcon} alt="show favorite events" />
        ) : (
          <img src={FavoriteIconActive} alt="show all events" />
        )}
      </button>
    </nav>
  );
};
