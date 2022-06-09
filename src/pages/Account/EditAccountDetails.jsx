import React from 'react';
import { Header, EditEntityForm } from '../../components';
import { useNavigate } from 'react-router-dom';
import { useHandleInputForm } from '../../helpers/useHandleInputForm';

export const EditAccountDetails = () => {
  const navigate = useNavigate();
  const initialValues = [
    { id: 'username', title: 'username', value: 'Danichella' },
    { id: 'firstName', title: 'first name', value: 'Danyil' },
    { id: 'lastName', title: 'last name', value: 'Dunaiskyi' },
    { id: 'email', title: 'email', value: 'daniladun07@gmail.com' },
    { id: 'password', title: 'password', value: '123456', type: 'password' },
    {
      id: 'confirmPassword',
      title: 'confirm password',
      value: '123456',
      type: 'password',
      placeholder: 'Enter your password again',
    },
  ];
  const { data, onChangeHandler } = useHandleInputForm(initialValues);

  return (
    <div>
      <Header
        secondary={{
          title: 'Cancel',
          callback: () => navigate('/accounts'),
        }}
        primary={{
          title: 'Save Changes',
          callback: () => navigate('/accounts'),
        }}
      />
      <EditEntityForm data={data} onChangeHandler={onChangeHandler} />
    </div>
  );
};
