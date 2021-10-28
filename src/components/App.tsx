import React, { useEffect, useState } from 'react';
import { apiRequest } from '../utils/Api';
import './App.css';
import { EventCard } from './EventCard/EventCard';
import { Header } from './Header/Header';
import { Main } from './Main/Mani';
import { Menu } from './Menu/Menu';

export type card = {
  id: string;
  name: string;
  date: string;
  city: string;
  genre: string;
  image: string;
};

export type filter = {
  city: string;
  month: number;
  favorites: boolean;
  cityList: string[];
  monthList: number[];
};

const App = () => {
  const [cards, setCards] = useState<card[]>([]);
  const [filteredCards, setFilteredCards] = useState<card[]>([]);
  const [filters, setFilters] = useState<filter>({
    city: 'show all',
    month: 0,
    cityList: ['show all'],
    monthList: [0],
    favorites: false,
  });
  useEffect(() => {
    apiRequest().then((data) => {
      setCards(data);
      const cityList = new Set<string>();
      const monthList = new Set<number>();
      data.forEach((event: card) => {
        cityList.add(event.city);
        monthList.add(Number(event.date.split('.')[1]));
      });
      const cityListArr = Array.from(cityList).sort();
      cityListArr.unshift('show all');
      const monthListArr = Array.from(monthList).sort((a, b) => a - b);
      monthListArr.unshift(0);
      setFilters({
        ...filters,
        cityList: cityListArr,
        monthList: monthListArr,
      });
    });
  }, []);

  useEffect(() => {
    const filtered = cards
      .filter((theCard) => {
        if (filters.month === 0) return true;
        return Number(theCard.date.split('.')[1]) === filters.month;
      })
      .filter((theCard) => {
        if (filters.city === 'show all') return true;
        return theCard.city === filters.city;
      });

    setFilteredCards(filtered);
  }, [cards, filters]);
  return (
    <div className="App">
      <Header />
      <Menu filters={filters} setFilters={setFilters} />
      <Main>
        {filteredCards.map((eventCard) => (
          <EventCard key={eventCard.id} eventCardData={eventCard} />
        ))}
      </Main>
    </div>
  );
};

export default App;
