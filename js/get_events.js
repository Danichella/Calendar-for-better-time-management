import { ApiController } from './api_controller.js';
import { addNotification } from './toaster.js';

const searchElementByDay = (day) => {
  const elements = document.querySelectorAll('.timetable-day-of-month-wrapper');
  let res;

  elements.forEach((element) => {
    if (
      element.children[0].innerText === day.toString() &&
      !Array.from(element.classList).includes(
        'timetable-day-of-month-title-inactive'
      )
    ) {
      res = element;
      return;
    }
  });

  return res;
};

const putEvent = (event) => {
  const day = new Date(event.date).getDate();
  const eventElement = document.createElement('a');
  eventElement.href = `/event/${event.id}`;
  eventElement.innerText = event.title;
  eventElement.classList.add('timetable-day-of-month-event');

  searchElementByDay(day).appendChild(eventElement);
};

const getEvents = async () => {
  const { get } = ApiController();

  const response = await get('/events');
  if (!response.message) {
    response.forEach((event) => putEvent(event));
  } else {
    addNotification('error', response.message ?? 'Something went wrong');
  }
};

const setTodayPointer = () => {
  const day = new Date().getDate();
  searchElementByDay(day).classList.add('timetable-today-pointer');
};

getEvents();
setTodayPointer();
