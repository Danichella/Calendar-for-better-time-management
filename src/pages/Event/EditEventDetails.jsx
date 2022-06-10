import React, { useEffect } from 'react';
import { Header, EditEntityForm } from '../../components';
import { useNavigate, useParams } from 'react-router-dom';
import { useEvent } from '../../api';
import {
  FillInServerResponse,
  PrepareDataForRequest,
  useHandleInputForm,
} from '../../helpers';

export const EditEventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getEventDetails, editEvent } = useEvent();
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
  const { data, setData, onChangeHandler } = useHandleInputForm(initialValues);

  const fetchData = async () => {
    const responseData = await getEventDetails(id);
    if (responseData) {
      responseData.date = new Date(responseData.date)
        .toISOString()
        .slice(0, 10);
      responseData.userEmails = responseData.userEmails.join(' ');
      setData(FillInServerResponse(responseData, initialValues));
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Header
        secondary={{
          title: 'Cancel',
          callback: () => navigate(`/events/${id}`),
        }}
        primary={{
          title: 'Save Changes',
          callback: () => editEvent(id, PrepareDataForRequest(data)),
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
