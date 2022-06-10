import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header, EntityDetailsForm, addNotification } from '../../components';
import { useAccount } from '../../api';
import { FillInServerResponse } from '../../helpers';

export const AccountDetails = () => {
  const navigate = useNavigate();
  const { getAccountDetails } = useAccount();
  const [data, setData] = useState([]);
  const initialFormat = [
    { id: 'username', title: 'Username:', value: null },
    { id: 'firstName', title: 'First name:', value: null },
    { id: 'lastName', title: 'Last name:', value: null },
    { id: 'email', title: 'Email:', value: null },
  ];

  const onLogOutHandler = () => {
    window.localStorage.removeItem('token');
    addNotification('success', 'Log out successfully');
    navigate('/login');
  };

  const fetchData = async () => {
    const responseData = await getAccountDetails();
    if (responseData) {
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
          title: 'Log out',
          callback: () => onLogOutHandler(),
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
