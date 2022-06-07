import { ApiController } from './api_controller.js';
import { addNotification } from './toaster.js';

const putDataInForm = (data) => {
  const elements = document.querySelectorAll('.authorization-input');

  elements[0].value = data.username;
  elements[1].value = data.firstName;
  elements[2].value = data.lastName;
  elements[3].value = data.email;
};

const getAccountDetails = async () => {
  const { get } = ApiController();

  const response = await get('/current_user');

  if (response.message) {
    addNotification('error', response.message ?? 'Something went wrong');
  } else {
    putDataInForm(response);
  }
};

const collectDataFromForm = () => {
  const data = document.querySelectorAll('.authorization-input');

  if (data[4]?.value !== data[5]?.value) {
    addNotification('error', "Passwords don't match");
    return false;
  }

  return {
    username: data[0]?.value,
    firstName: data[1]?.value,
    lastName: data[2]?.value,
    email: data[3]?.value,
    password: data[4]?.value,
  };
};

const onSaveChangesHandler = async () => {
  const { put } = ApiController();

  const body = collectDataFromForm();
  if (!body) return;

  const response = await put('/current_user', body);
  if (response.id) {
    addNotification('success', 'New users data saved successfully');
    window.location.href = `${window.origin}/account`;
  } else {
    addNotification('error', response.Error ?? 'Something went wrong');
  }
};

getAccountDetails();

document
  .querySelector('.header-actions-primary-button')
  .addEventListener('click', onSaveChangesHandler);
