import { ApiController } from './api_controller.js';
import { addNotification } from './toaster.js';

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

const onSignUpButtonClick = async () => {
  const { post } = ApiController();

  const body = collectDataFromForm();
  if (!body) return;

  const response = await post('/register', body);
  if (response.message) {
    addNotification('success', response.message);
    window.location.href = `${window.origin}/login`;
  } else {
    addNotification('error', response.Error ?? 'Something went wrong');
  }
};

document
  .querySelector('.authorization-submit-button')
  .addEventListener('click', onSignUpButtonClick);
