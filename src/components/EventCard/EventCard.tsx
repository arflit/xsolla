import React from 'react';
import { card } from '../App';
import './EventCard.css';

type eventCardProps = {
  eventCardData: card
};

export const EventCard = ({ eventCardData }: eventCardProps) => {
  const { name, image, date } = eventCardData;
  return (
    <div className="event-card" style={{ backgroundImage: `url(${image})` }}>
      <p className="event-card__date">{date.split('.')[0]}</p>
      <button type="button" className="event-card__favorites-button">
        избранное
      </button>
      <h2 className="event-card__title">{name}</h2>
    </div>
  );
};
