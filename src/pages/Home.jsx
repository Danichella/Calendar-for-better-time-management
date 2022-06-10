import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header, Timetable } from '../components';
import { useEvent } from '../api';

export const Home = () => {
  const navigate = useNavigate();
  const { getEventList } = useEvent();
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const responseData = await getEventList();
    if (responseData) {
      setData(responseData);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
      <Timetable eventsList={data} />
    </div>
  );
};
