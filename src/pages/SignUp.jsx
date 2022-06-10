import React from 'react';
import { AuthorizationForm } from '../components';
import { useHandleInputForm, PrepareDataForRequest } from '../helpers';
import { useAuthorization } from '../api';

export const SignUp = () => {
  const { sign_up } = useAuthorization();
  const initialValues = [
    { id: 'username', title: 'username', value: null },
    { id: 'firstName', title: 'first name', value: null },
    { id: 'lastName', title: 'last name', value: null },
    { id: 'email', title: 'email', value: null },
    { id: 'password', title: 'password', value: null, type: 'password' },
    {
      id: 'confirmPassword',
      title: 'confirm password',
      value: null,
      type: 'password',
      placeholder: 'Enter your password again',
    },
  ];
  const { data, onChangeHandler } = useHandleInputForm(initialValues);

  return (
    <AuthorizationForm
      data={data}
      onChangeHandler={onChangeHandler}
      submitTitle="Sign up"
      onSubmitClick={() => sign_up(PrepareDataForRequest(data))}
    >
      Already have an account? <a href="/login">Log in</a>
    </AuthorizationForm>
  );
};
