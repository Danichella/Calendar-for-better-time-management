import { useState, useEffect } from 'react';
import '../assets/sass/timetable.scss';
import ArrowLeftIcon from '../assets/img/ArrowLeftIcon.svg';
import ArrowRightIcon from '../assets/img/ArrowRightIcon.svg';

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

const formatArrayOfDays = (month) => {
  const dayOfWeek = new Date(new Date().getFullYear(), month, 1).getDay();
  const daysInMonth = new Date(new Date().getFullYear(), month, 0).getDate();
  const daysInPrevMonth = new Date(
    new Date().getFullYear(),
    month > 0 ? month - 1 : 11,
    0
  ).getDate();
  const beforeActive = [
    ...Array(dayOfWeek > 0 ? dayOfWeek - 1 : dayOfWeek),
  ].map((_element, index) => ({
    type: 'inactive',
    day: daysInPrevMonth - index,
  }));
  const active = [...Array(daysInMonth)].map((_element, index) => ({
    type: 'active',
    day: index + 1,
  }));
  const currentLength = active.length + beforeActive.length;
  if (currentLength % 7 === 0) return [...beforeActive, ...active];

  const afterActive = [...Array(7 - (currentLength % 7))].map(
    (_element, index) => ({ type: 'inactive', day: index + 1 })
  );

  return [...beforeActive, ...active, ...afterActive];
};

export const Timetable = () => {
  const date = new Date();
  const [currentMonth, setCurrentMonth] = useState(date.getMonth());
  const [daysOfMonth, setDaysOfMonth] = useState(
    formatArrayOfDays(currentMonth)
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
    setDaysOfMonth(formatArrayOfDays(currentMonth));
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
        {daysOfMonth.map((element, index) => (
          <div key={index} className="timetable-day-of-month-wrapper">
            {element.type === 'active' ? (
              date.getDate() === element.day &&
              date.getMonth() === currentMonth ? (
                <p className="timetable-day-of-month-title timetable-today-pointer">
                  {element.day}
                </p>
              ) : (
                <p className="timetable-day-of-month-title">{element.day}</p>
              )
            ) : (
              <p className="timetable-day-of-month-title timetable-day-of-month-title-inactive">
                {element.day}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
