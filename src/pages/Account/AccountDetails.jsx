import React from 'react';
import { Header, EntityDetailsForm } from '../../components';
import { useNavigate } from 'react-router-dom';

export const AccountDetails = () => {
  const navigate = useNavigate();
  const data = [
    { title: 'Username:', value: 'Danichella' },
    { title: 'First name:', value: 'Danyil' },
    { title: 'Last name:', value: 'Dunaiskyi' },
    { title: 'Email:', value: 'daniladun07@gmail.com' },
  ];

  return (
    <div>
      <Header
        secondary={{
          title: 'Log out',
          callback: () => navigate('/login'),
        }}
        primary={{
          title: 'My Timetable',
          callback: () => navigate('/'),
        }}
      />
      <EntityDetailsForm
        entityType="Account"
        data={data}
        onEditClick={() => navigate('/accounts/edit')}
      />
    </div>
  );
};
