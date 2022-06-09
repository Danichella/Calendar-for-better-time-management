import React from 'react';
import { AuthorizationForm } from '../components';
import { useNavigate } from 'react-router-dom';
import { useHandleInputForm } from '../helpers/useHandleInputForm';

export const Login = () => {
  const navigate = useNavigate();
  const initialValues = [
    { id: 'email', title: 'email', value: null },
    { id: 'password', title: 'password', value: null, type: 'password' },
  ];
  const { data, onChangeHandler } = useHandleInputForm(initialValues);

  return (
    <AuthorizationForm
      data={data}
      onChangeHandler={onChangeHandler}
      submitTitle="Log in"
      onSubmitClick={() => navigate('/')}
    >
      Don't have an account? <a href="/sign_up">Sign up</a>
    </AuthorizationForm>
  );
};
