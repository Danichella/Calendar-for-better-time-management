import { ApiController } from './api_controller.js';
import { addNotification } from './toaster.js';

const event_id = window.location.pathname.split('/').slice(-1)[0];

const putDataInForm = (data) => {
  const elements = document.querySelectorAll(
    '.entity-details-data-field-wrapper'
  );
  const userEmailsElement = document.querySelector(
    '.entity-details-data-field-with-multiple-values-wrapper'
  );

  elements[0].children[1].innerText = data.title;
  elements[1].children[1].innerText = new Date(data.date).toDateString();
  data.userEmails.forEach((userEmail) => {
    const emailText = document.createElement('p');
    emailText.innerText = userEmail;
    userEmailsElement.appendChild(emailText);
  });
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

getEventDetails();

document.querySelector(
  '.entity-details-header-wrapper'
).children[1].href = `/event/edit/${event_id}`;
