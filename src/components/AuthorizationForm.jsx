import React from 'react';
import '../assets/sass/authorization.scss';
import Logo from '../assets/img/Logo.png';

export const AuthorizationForm = ({
  data,
  onChangeHandler,
  submitTitle,
  onSubmitClick,
  children,
}) => {
  return (
    <div className="authorization-wrapper">
      <div className="authorization-form-wrapper">
        <img src={Logo} alt="Logo" className="authorization-form-logo" />
        {data.map((element, index) => (
          <div key={index}>
            <p className="authorization-input-label authorization-space-between">
              {`${element.title[0].toUpperCase()}${element.title.slice(1)}:`}
            </p>
            <input
              type={element.type ?? 'text'}
              className="authorization-input"
              placeholder={element.placeholder ?? `Enter your ${element.title}`}
              value={element.value ?? ''}
              onChange={(e) => onChangeHandler(element.id, e.target.value)}
            />
          </div>
        ))}
        <button
          className="authorization-submit-button authorization-space-between"
          onClick={onSubmitClick}
        >
          {submitTitle}
        </button>
        <p className="authorization-additional-message authorization-space-between">
          {children}
        </p>
      </div>
    </div>
  );
};
