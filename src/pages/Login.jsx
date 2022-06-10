import React from 'react';
import { AuthorizationForm } from '../components';
import { useHandleInputForm, PrepareDataForRequest } from '../helpers';
import { useAuthorization } from '../api';

export const Login = () => {
  const { login } = useAuthorization();
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
      onSubmitClick={() => login(PrepareDataForRequest(data))}
    >
      Don't have an account? <a href="/sign_up">Sign up</a>
    </AuthorizationForm>
  );
};
