import { useState, useEffect } from 'react';
import '../assets/sass/timetable.scss';
import ArrowLeftIcon from '../assets/img/ArrowLeftIcon.svg';
import ArrowRightIcon from '../assets/img/ArrowRightIcon.svg';
import { FormatArrayOfDays } from '../helpers';
import { BlockOfEvents } from './BlockOfEvents';

const monthTitles = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const Timetable = ({ eventsList }) => {
  const date = new Date();
  const [currentMonth, setCurrentMonth] = useState(date.getMonth());
  const [daysOfMonth, setDaysOfMonth] = useState(
    FormatArrayOfDays(currentMonth)
  );

  const onPrevMonthHandleClick = () => {
    currentMonth === 0
      ? setCurrentMonth(11)
      : setCurrentMonth(currentMonth - 1);
  };
  const onNextMonthHandleClick = () => {
    currentMonth === 11
      ? setCurrentMonth(0)
      : setCurrentMonth(currentMonth + 1);
  };

  useEffect(() => {
    setDaysOfMonth(FormatArrayOfDays(currentMonth));
  }, [currentMonth]);

  return (
    <div>
      <p className="timetable-title">Your Timetable</p>
      <div className="timetable-calendar-actions-wrapper">
        <div className="timetable-month-controller-wrapper">
          <img
            src={ArrowLeftIcon}
            alt="prev"
            onClick={() => onPrevMonthHandleClick()}
          />
          <p>{monthTitles[currentMonth]}</p>
          <img
            src={ArrowRightIcon}
            alt="next"
            onClick={() => onNextMonthHandleClick()}
          />
        </div>
        <button onClick={() => setCurrentMonth(date.getMonth())}>Today</button>
      </div>
      <div className="timetable-grid">
        <div className="timetable-day-of-week-wrapper">Mon</div>
        <div className="timetable-day-of-week-wrapper">Tue</div>
        <div className="timetable-day-of-week-wrapper">Wed</div>
        <div className="timetable-day-of-week-wrapper">Thu</div>
        <div className="timetable-day-of-week-wrapper">Fri</div>
        <div className="timetable-day-of-week-wrapper">Sat</div>
        <div className="timetable-day-of-week-wrapper">Sun</div>
        {daysOfMonth.map((element, index) => {
          let titleOfBlock = (
            <p className="timetable-day-of-month-title">{element.day}</p>
          );

          if (element.type === 'inactive')
            titleOfBlock = (
              <p className="timetable-day-of-month-title timetable-day-of-month-title-inactive">
                {element.day}
              </p>
            );

          if (
            element.type === 'active' &&
            date.getDate() === element.day &&
            date.getMonth() === currentMonth
          )
            titleOfBlock = (
              <p className="timetable-day-of-month-title timetable-today-pointer">
                {element.day}
              </p>
            );

          return (
            <div key={index} className="timetable-day-of-month-wrapper">
              {titleOfBlock}
              {element.type !== 'inactive' && (
                <BlockOfEvents
                  eventsList={eventsList}
                  currentMonth={currentMonth}
                  currentDay={element.day}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
