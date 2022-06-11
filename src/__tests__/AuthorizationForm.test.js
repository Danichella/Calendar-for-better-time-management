import React from 'react';
import { shallow } from 'enzyme';
import { AuthorizationForm } from '../components/AuthorizationForm';

describe('AuthorizationForm', () => {
  let component;
  let onSubmitCallback;
  let onChangeHandler;
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

  beforeEach(() => {
    onSubmitCallback = jest.fn();
    onChangeHandler = jest.fn();
    component = shallow(
      <AuthorizationForm
        data={initialValues}
        onChangeHandler={onChangeHandler}
        submitTitle="Sign up"
        onSubmitClick={onSubmitCallback}
      />
    );
  });

  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('should call callback function when on submit button click', () => {
    component.find('.authorization-submit-button').simulate('click');

    expect(onSubmitCallback).toHaveBeenCalledTimes(1);
  });

  it('should call callback function when change input value', () => {
    component
      .find('.authorization-input')
      .first()
      .simulate('change', { target: { value: 'name' } });

    expect(onChangeHandler).toHaveBeenCalledTimes(1);
  });
});
