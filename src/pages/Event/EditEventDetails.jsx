import React from 'react';
import { Header, EditEntityForm } from '../../components';
import { useHandleInputForm } from '../../helpers/useHandleInputForm';
import { useNavigate } from 'react-router-dom';

export const EditEventDetails = () => {
  const navigate = useNavigate();
  const initialValues = [
    { id: 'title', title: 'event title', value: 'My event' },
    { id: 'date', title: 'event date', value: '2022-06-18', type: 'date' },
    {
      id: 'userEmails',
      title: 'invited users',
      value: 'daniladun07@gmail.com',
      placeholder: 'Enter email of users you want invite',
    },
  ];
  const { data, onChangeHandler } = useHandleInputForm(initialValues);

  return (
    <div>
      <Header
        secondary={{
          title: 'Cancel',
          callback: () => navigate('/events'),
        }}
        primary={{
          title: 'Save Changes',
          callback: () => navigate('/events'),
        }}
      />
      <EditEntityForm
        data={data}
        onChangeHandler={onChangeHandler}
        helperText="Separate emails by space to invite multiple users"
      />
    </div>
  );
};
