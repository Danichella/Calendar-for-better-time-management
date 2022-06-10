import { useApi } from './useApi.js';
import { Toaster } from '../components';
import { useNavigate } from 'react-router-dom';

export const useEvent = () => {
  const { addNotification } = Toaster();
  const navigate = useNavigate();
  const { get, post, put } = useApi();

  const getEventList = async () => {
    const response = await get('/events');

    if (response?.message) {
      addNotification('error', response.message ?? 'Something went wrong');
      return [];
    }

    return response ?? [];
  };

  const getEventDetails = async (event_id) => {
    const response = await get(`/events/${event_id}`);

    if (response?.Error) {
      addNotification('error', response.Error ?? 'Something went wrong');
      return [];
    }

    return response ?? [];
  };

  const createEvent = async (body) => {
    const response = await post('/events', body);

    if (response?.id) {
      addNotification('success', 'Event created successfully');
      navigate('/');
    } else {
      addNotification('error', response.Error ?? 'Something went wrong');
    }
  };

  const editEvent = async (event_id, body) => {
    const response = await put(`/events/${event_id}`, body);

    if (response?.id) {
      addNotification('success', 'Event created successfully');
      navigate(`/events/${event_id}`);
    } else {
      addNotification('error', response.Error ?? 'Something went wrong');
    }
  };

  return { getEventList, getEventDetails, createEvent, editEvent };
};
