import { ApiController } from './api_controller.js';
import { addNotification } from './toaster.js';

const putDataInForm = (data) => {
  const elements = document.querySelectorAll(
    '.entity-details-data-field-wrapper'
  );

  elements[0].children[1].innerText = data.username;
  elements[1].children[1].innerText = data.firstName;
  elements[2].children[1].innerText = data.lastName;
  elements[3].children[1].innerText = data.email;
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

const onLogOutHandler = () => {
  window.localStorage.removeItem('token');
  addNotification('success', 'Log out successfully');
  window.location.href = `${window.origin}/login`;
};

getAccountDetails();

document
  .querySelector('.header-actions-secondary-button')
  .addEventListener('click', onLogOutHandler);
