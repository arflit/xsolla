/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { card } from '../App';
import './EventCard.css';
import favoriteIcon from '../../images/favorites.png';
import favoriteIconActive from '../../images/favorites_active.png';

type eventCardProps = {
  eventCardData: card;
  // eslint-disable-next-line no-unused-vars
  toggleFavorite: (id: string) => void;
};

export const EventCard = ({ eventCardData, toggleFavorite }: eventCardProps) => {
  const {
    name, image, date, isFavorite, id,
  } = eventCardData;
  const handleFavoriteClick = () => {
    toggleFavorite(id);
  };
  return (
    <div className="event-card" style={{ backgroundImage: `url(${image})` }}>
      <div className="event-card__header">
        <div className="event-card__date">
          <p className="event-card__datename">{date.split('.')[0]}</p>
        </div>
        <button
          type="button"
          className="event-card__favorites-button"
          style={{ backgroundImage: `url(${isFavorite ? favoriteIconActive : favoriteIcon})` }}
          onClick={handleFavoriteClick}
        />
      </div>
      <h2 className="event-card__title">{name}</h2>
    </div>
  );
};
