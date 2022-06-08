import '../assets/sass/toaster.scss';
import SuccessIcon from '../assets/img/SuccessIcon.svg';
import ErrorIcon from '../assets/img/ErrorIcon.svg';
import ReactDOM from 'react-dom';

export const addNotification = (type, message) => {
  const toast = (
    <div className={`toaster-element toaster-element-${type}`}>
      <img src={type === 'success' ? SuccessIcon : ErrorIcon} />
      <p>{message}</p>
    </div>
  );

  ReactDOM.render(toast, document.getElementById('toaster'));
  setTimeout(() => {
    document
      .getElementById('toaster')
      .removeChild(document.getElementById('toaster').childNodes[0]);
  }, 3000);
};
