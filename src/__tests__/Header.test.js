import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../components/Header';

describe('Header', () => {
  let component;
  let secondaryActionCallback;
  let primaryActionCallback;

  beforeEach(() => {
    secondaryActionCallback = jest.fn();
    primaryActionCallback = jest.fn();
    component = shallow(
      <Header
        secondary={{
          title: 'My Account',
          callback: secondaryActionCallback,
        }}
        primary={{
          title: 'Add new event',
          callback: primaryActionCallback,
        }}
      />
    );
  });

  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('should call callback function on secondary action click', () => {
    component.find('.header-actions-secondary-button').simulate('click');

    expect(secondaryActionCallback).toHaveBeenCalledTimes(1);
    expect(primaryActionCallback).toHaveBeenCalledTimes(0);
  });

  it('should call callback function on primary action click', () => {
    component.find('.header-actions-primary-button').simulate('click');

    expect(primaryActionCallback).toHaveBeenCalledTimes(1);
    expect(secondaryActionCallback).toHaveBeenCalledTimes(0);
  });
});
