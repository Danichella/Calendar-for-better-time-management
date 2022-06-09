import React from 'react';
import { Header, EntityDetailsForm } from '../../components';
import { useNavigate } from 'react-router-dom';

export const EventDetails = () => {
  const navigate = useNavigate();
  const data = [
    { title: 'Event title:', value: 'My event' },
    { title: 'Event date:', value: '2022-06-18' },
    { title: 'Invited users:', value: ['daniladun07@gmail.com'] },
  ];

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
        onEditClick={() => navigate('/events/edit')}
      />
    </div>
  );
};
