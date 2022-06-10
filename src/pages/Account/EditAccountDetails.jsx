import React, { useEffect } from 'react';
import { Header, EditEntityForm } from '../../components';
import { useNavigate } from 'react-router-dom';
import { useAccount } from '../../api';
import {
  FillInServerResponse,
  PrepareDataForRequest,
  useHandleInputForm,
} from '../../helpers';

export const EditAccountDetails = () => {
  const navigate = useNavigate();
  const { getAccountDetails, editAccountDetails } = useAccount();
  const initialValues = [
    { id: 'username', title: 'username', value: null },
    { id: 'firstName', title: 'first name', value: null },
    { id: 'lastName', title: 'last name', value: null },
    { id: 'email', title: 'email', value: null },
  ];
  const { data, setData, onChangeHandler } = useHandleInputForm(initialValues);

  const fetchData = async () => {
    const responseData = await getAccountDetails();
    if (responseData) {
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
          callback: () => navigate('/accounts'),
        }}
        primary={{
          title: 'Save Changes',
          callback: () => editAccountDetails(PrepareDataForRequest(data)),
        }}
      />
      <EditEntityForm data={data} onChangeHandler={onChangeHandler} />
    </div>
  );
};
