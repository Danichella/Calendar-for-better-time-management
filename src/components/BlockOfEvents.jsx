import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/sass/timetable.scss';

export const BlockOfEvents = ({ eventsList, currentMonth, currentDay }) => {
  const navigate = useNavigate();
  const matchedEvents = eventsList?.filter((event) => {
    const date = new Date(event.date);
    return date.getMonth() === currentMonth && date.getDate() === currentDay;
  });

  if (!matchedEvents || matchedEvents.length === 0) return <></>;

  return (
    <div>
      {matchedEvents.map((event, index) => (
        <div
          key={index}
          className="timetable-day-of-month-event"
          onClick={() => navigate(`/events/${event.id}`)}
        >
          {event.title}
        </div>
      ))}
    </div>
  );
};
