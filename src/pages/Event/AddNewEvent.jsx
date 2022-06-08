import React from 'react';
import { Header, EditEntityForm } from '../../components';
import { useHandleInputForm } from '../../helpers/useHandleInputForm';
import { useNavigate } from 'react-router-dom';

export const AddNewEvent = () => {
  const navigate = useNavigate();
  const initialValues = [
    { id: 'title', title: 'event title', value: null },
    { id: 'date', title: 'event date', value: null, type: 'date' },
    {
      id: 'userEmails',
      title: 'invited users',
      value: null,
      placeholder: 'Enter email of users you want invite',
    },
  ];
  const { data, onChangeHandler } = useHandleInputForm(initialValues);

  return (
    <div>
      <Header
        secondary={{
          title: 'Cancel',
          callback: () => navigate('/'),
        }}
        primary={{
          title: 'Save Changes',
          callback: () => navigate('/'),
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
