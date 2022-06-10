import { useNavigate } from 'react-router-dom';

const baseUrl = 'http://127.0.0.1:5000';
const headers = () => ({
  'Content-Type': 'application/json',
  Accept: 'application/json',
  'Access-Control-Allow-Origin': '*',
  'x-access-tokens': window.localStorage.getItem('token', null),
});

export const useApi = () => {
  const navigate = useNavigate();

  const catchForbiddenResponse = () => {
    window.localStorage.removeItem('token');
    navigate('/login');
  };

  const get = async (url) => {
    return fetch(`${baseUrl}${url}`, {
      headers: headers(),
      method: 'GET',
    })
      .then((response) => {
        if (response.status === 403) catchForbiddenResponse();
        return response.json();
      })
      .catch((error) => error);
  };

  const post = async (url, body) => {
    return await fetch(`${baseUrl}${url}`, {
      headers: headers(),
      method: 'POST',
      body: JSON.stringify(body),
    })
      .then((response) => {
        if (response.status === 403) catchForbiddenResponse();
        return response.json();
      })
      .catch((error) => error);
  };

  const put = async (url, body) => {
    return await fetch(`${baseUrl}${url}`, {
      headers: headers(),
      method: 'PUT',
      body: JSON.stringify(body),
    })
      .then((response) => {
        if (response.status === 403) catchForbiddenResponse();
        return response.json();
      })
      .catch((error) => error);
  };

  return {
    get,
    post,
    put,
  };
};
