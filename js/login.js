import { ApiController } from './api_controller.js';
import { addNotification } from './toaster.js';

const collectDataFromForm = () => {
  const data = document.querySelectorAll('.authorization-input');

  return {
    email: data[0]?.value,
    password: data[1]?.value,
  };
};

const onLoginButtonClick = async () => {
  const { post } = ApiController();

  const response = await post('/login', collectDataFromForm());
  if (response.token) {
    addNotification('success', 'Log in successfully');
    window.localStorage.setItem('token', response.token.slice(2, -1));
    window.location.href = `${window.origin}/`;
  } else {
    addNotification('error', response.Error ?? 'Something went wrong');
  }
};

document
  .querySelector('.authorization-submit-button')
  .addEventListener('click', onLoginButtonClick);
