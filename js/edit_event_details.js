import { ApiController } from './api_controller.js';
import { addNotification } from './toaster.js';

const event_id = window.location.pathname.split('/').slice(-1)[0];

const collectDataFromForm = () => {
  const data = document.querySelectorAll('.authorization-input');

  return {
    title: data[0]?.value,
    date: data[1]?.value,
    userEmails: data[2]?.value,
  };
};

const putDataInForm = (data) => {
  const elements = document.querySelectorAll('.authorization-input');

  elements[0].value = data.title;
  elements[1].value = new Date(data.date).toISOString().slice(0, 10);
  elements[2].value = data.userEmails.join(' ');
};

const getEventDetails = async () => {
  const { get } = ApiController();

  const response = await get(`/events/${event_id}`);

  if (response.Error) {
    addNotification('error', response.Error ?? 'Something went wrong');
  } else {
    putDataInForm(response);
  }
};

const onEditButtonClick = async () => {
  const { put } = ApiController();

  const body = collectDataFromForm();
  if (!body) return;

  const response = await put(`/events/${event_id}`, body);
  if (response.id) {
    addNotification('success', 'Event created successfully');
    window.location.href = `${window.origin}/event/${event_id}`;
  } else {
    addNotification('error', response.Error ?? 'Something went wrong');
  }
};

getEventDetails();
document
  .querySelector('.header-actions-primary-button')
  .addEventListener('click', onEditButtonClick);
document.querySelector(
  '.header-actions-secondary-button'
).href = `/event/${event_id}`;
