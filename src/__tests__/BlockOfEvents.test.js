import React from 'react';
import * as router from 'react-router';
import { shallow } from 'enzyme';
import { BlockOfEvents } from '../components/BlockOfEvents';

describe('BlockOfEvents', () => {
  let component;
  let navigationCallback;
  const eventList = [
    {
      id: 1,
      title: 'First Event',
      date: new Date(),
      userEmails: ['test@gmail.com'],
    },
    {
      id: 2,
      title: 'Second Event',
      date: new Date(),
      userEmails: ['test@gmail.com', 'test2@gmail.com'],
    },
  ];

  beforeEach(() => {
    navigationCallback = jest.fn();
    jest
      .spyOn(router, 'useNavigate')
      .mockImplementation(() => navigationCallback);
    component = shallow(
      <BlockOfEvents
        eventsList={eventList}
        currentMonth={new Date().getMonth()}
        currentDay={new Date().getDate()}
      />
    );
  });

  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('should call navigate to event page when on block click', () => {
    component.find('.timetable-day-of-month-event').first().simulate('click');

    expect(navigationCallback).toHaveBeenCalledWith(
      `/events/${eventList[0].id}`
    );
  });
});
