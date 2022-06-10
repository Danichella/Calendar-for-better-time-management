import { useApi } from './useApi.js';
import { addNotification } from '../components/Toaster';
import { useNavigate } from 'react-router-dom';

export const useAuthorization = () => {
  const navigate = useNavigate();
  const { post } = useApi();

  const login = async (body) => {
    const response = await post('/login', body);
    if (response.token) {
      addNotification('success', 'Log in successfully');
      window.localStorage.setItem('token', response.token.slice(2, -1));
      navigate('/');
    } else {
      addNotification('error', response.Error ?? 'Something went wrong');
    }
  };

  const sign_up = async (body) => {
    if (body.password !== body.confirmPassword) {
      addNotification('error', "Passwords don't match");
      return;
    }
    delete body.confirmPassword;

    const response = await post('/register', body);
    if (response.message) {
      addNotification('success', 'Log in successfully');
      navigate('/login');
    } else {
      addNotification('error', response.Error ?? 'Something went wrong');
    }
  };

  return { login, sign_up };
};
