import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import {
  Home,
  AccountDetails,
  EditAccountDetails,
  EditEventDetails,
  EventDetails,
  AddNewEvent,
  Login,
  SignUp,
} from './pages';

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (
      !window.localStorage.getItem('token', null) &&
      location.pathname !== '/sign_up'
    )
      navigate('/login');
  }, [window.localStorage.getItem('token', null)]);

  return (
    <Routes>
      <Route path="/" exec element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign_up" element={<SignUp />} />
      <Route path="/accounts/edit" element={<EditAccountDetails />} />
      <Route path="/accounts" element={<AccountDetails />} />
      <Route path="/events/new" element={<AddNewEvent />} />
      <Route path="/events/:id/edit" element={<EditEventDetails />} />
      <Route path="/events/:id" element={<EventDetails />} />
    </Routes>
  );
};

export default App;
