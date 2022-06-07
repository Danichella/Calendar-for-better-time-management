import { ApiController } from './api_controller.js';
import { addNotification } from './toaster.js';

const collectDataFromForm = () => {
  const data = document.querySelectorAll('.authorization-input');

  return {
    title: data[0]?.value,
    date: data[1]?.value,
    userEmails: data[2]?.value,
  };
};

const onCreateButtonClick = async () => {
  const { post } = ApiController();

  const body = collectDataFromForm();
  if (!body) return;

  const response = await post('/events', body);
  if (response.id) {
    addNotification('success', 'Event created successfully');
    window.location.href = `${window.origin}/`;
  } else {
    addNotification('error', response.Error ?? 'Something went wrong');
  }
};

document
  .querySelector('.header-actions-primary-button')
  .addEventListener('click', onCreateButtonClick);
