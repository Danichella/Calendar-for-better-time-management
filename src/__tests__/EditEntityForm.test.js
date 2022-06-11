import React from 'react';
import { shallow } from 'enzyme';
import { EditEntityForm } from '../components/EditEntityForm';

describe('EditEntityForm', () => {
  let component;
  let onChangeHandler;
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

  beforeEach(() => {
    onChangeHandler = jest.fn();
    component = shallow(
      <EditEntityForm
        data={initialValues}
        onChangeHandler={onChangeHandler}
        helperText="Separate emails by space to invite multiple users"
      />
    );
  });

  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('should call callback function when change input value', () => {
    component
      .find('.authorization-input')
      .first()
      .simulate('change', { target: { value: 'title' } });

    expect(onChangeHandler).toHaveBeenCalledTimes(1);
  });
});
