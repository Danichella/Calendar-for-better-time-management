const mainWrapper = document.createElement('div');
mainWrapper.classList.add('toaster-wrapper');
document.body.appendChild(mainWrapper);

export const addNotification = (type, message) => {
  const notification = document.createElement('div');
  const icon = document.createElement('img');
  const text = document.createElement('p');

  icon.src =
    type === 'success' ? '../img/SuccessIcon.svg' : '../img/ErrorIcon.svg';
  text.innerText = message;
  notification.classList.add('toaster-element');
  notification.classList.add(`toaster-element-${type}`);

  notification.appendChild(icon);
  notification.appendChild(text);
  mainWrapper.appendChild(notification);
  setTimeout(
    () => document.querySelector('.toaster-wrapper').removeChild(notification),
    3000
  );
};
