import React, { createContext, useContext } from 'react';
import '../assets/sass/toaster.scss';
import SuccessIcon from '../assets/img/SuccessIcon.svg';
import ErrorIcon from '../assets/img/ErrorIcon.svg';

const ToasterContext = createContext({});

const ToasterWrapper = ({ toasts }) => {
  return <div className="toaster-wrapper">{toasts}</div>;
};

const Toaster = () => {
  const { toasts, setToasts } = useContext(ToasterContext);

  const addNotification = (type, message) => {
    const toast = (
      <div
        key={toasts.length}
        className={`toaster-element toaster-element-${type}`}
      >
        <img src={type === 'success' ? SuccessIcon : ErrorIcon} alt="Icon" />
        <p>{message}</p>
      </div>
    );

    setToasts((previous) => [...previous, toast]);

    setTimeout(() => {
      setToasts((previous) => [...previous.slice(1)]);
    }, 3000);
  };

  return {
    addNotification,
  };
};

export { Toaster, ToasterContext, ToasterWrapper };
