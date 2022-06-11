import React from 'react';
import { shallow } from 'enzyme';
import { EntityDetailsForm } from '../components/EntityDetailsForm';

describe('EntityDetailsForm', () => {
  let component;
  let onEditHandler;
  const initialValues = [
    { id: 'title', title: 'event title', value: 'Title' },
    { id: 'date', title: 'event date', value: '2022-06-12', type: 'date' },
    {
      id: 'userEmails',
      title: 'invited users',
      value: ['test@gmail.com'],
      placeholder: 'Enter email of users you want invite',
    },
  ];

  beforeEach(() => {
    onEditHandler = jest.fn();
    component = shallow(
      <EntityDetailsForm
        entityType="Event"
        data={initialValues}
        onEditClick={onEditHandler}
      />
    );
  });

  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('should call callback function when on edit button click', () => {
    component.find('.entity-details-header-wrapper img').simulate('click');

    expect(onEditHandler).toHaveBeenCalledTimes(1);
  });
});
