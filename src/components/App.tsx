import React from 'react';
import './App.css';
import { EventCard } from './EventCard/EventCard';
import { Header } from './Header/Header';
import { Main } from './Main/Mani';
import { Menu } from './Menu/Menu';

const App = () => {
  const mocCard = {
    id: '02',
    name: 'Best of 2019',
    date: '20.09.2019',
    city: 'Berlin',
    genre: 'Mixed',
    image: 'https://cdn3.xsolla.com/files/uploaded/113250/ec3917285ef4db8532c8a9cd9a2112ce.png',
  };
  return (
    <div className="App">
      <Header />
      <Menu />
      <Main>
        <EventCard eventCardData={mocCard} />
        <EventCard eventCardData={mocCard} />
      </Main>
    </div>
  );
};

export default App;
