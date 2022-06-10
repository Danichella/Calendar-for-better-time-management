import { useApi } from './useApi.js';
import { addNotification } from '../components/Toaster';
import { useNavigate } from 'react-router-dom';

export const useAccount = () => {
  const navigate = useNavigate();
  const { get, put } = useApi();

  const getAccountDetails = async () => {
    const response = await get('/current_user');

    if (response.message) {
      addNotification('error', response.message ?? 'Something went wrong');
      return;
    }

    return response;
  };

  const editAccountDetails = async (body) => {
    const response = await put('/current_user', body);
    if (response.id) {
      addNotification('success', 'New users data saved successfully');
      navigate('/accounts');
    } else {
      addNotification('error', response.Error ?? 'Something went wrong');
    }
  };

  return { getAccountDetails, editAccountDetails };
};
