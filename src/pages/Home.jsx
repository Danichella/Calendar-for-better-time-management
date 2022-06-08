import React from 'react';
import { Header, Timetable } from '../components';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header
        secondary={{
          title: 'My Account',
          callback: () => navigate('/accounts'),
        }}
        primary={{
          title: 'Add new event',
          callback: () => navigate('/events/new'),
        }}
      />
      <Timetable />
    </div>
  );
};
