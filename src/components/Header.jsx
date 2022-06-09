import '../assets/sass/header.scss';
import Logo from '../assets/img/Logo.png';

export const Header = ({ secondary, primary }) => {
  return (
    <div className="header-wrapper">
      <img src={Logo} alt="Logo" className="header-logo" />
      <div className="header-actions-wrapper">
        <button
          className="header-actions-secondary-button"
          onClick={secondary.callback}
        >
          {secondary.title}
        </button>
        <button
          className="header-actions-primary-button"
          onClick={primary.callback}
        >
          {primary.title}
        </button>
      </div>
    </div>
  );
};
