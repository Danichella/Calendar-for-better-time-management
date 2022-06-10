import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Header, EntityDetailsForm } from '../../components';
import { useEvent } from '../../api';
import { FillInServerResponse } from '../../helpers';

export const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getEventDetails } = useEvent();
  const [data, setData] = useState([]);
  const initialFormat = [
    { id: 'title', title: 'Event title:', value: 'My event' },
    { id: 'date', title: 'Event date:', value: '2022-06-18' },
    {
      id: 'userEmails',
      title: 'Invited users:',
      value: ['daniladun07@gmail.com'],
    },
  ];

  const fetchData = async () => {
    const responseData = await getEventDetails(id);
    if (responseData) {
      responseData.date = new Date(responseData.date).toDateString();
      setData(FillInServerResponse(responseData, initialFormat));
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Header
        secondary={{
          title: 'Add new event',
          callback: () => navigate('/events/new'),
        }}
        primary={{
          title: 'My Timetable',
          callback: () => navigate('/'),
        }}
      />
      <EntityDetailsForm
        entityType="Event"
        data={data}
        onEditClick={() => navigate(`/events/${id}/edit`)}
      />
    </div>
  );
};
