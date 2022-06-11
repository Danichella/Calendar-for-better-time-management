import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
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
import { ToasterContext, ToasterWrapper } from './components';

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    if (
      !localStorage.getItem('token', null) &&
      location.pathname !== '/sign_up'
    )
      navigate('/login');
  }, [localStorage.getItem('token', null)]);

  return (
    <ToasterContext.Provider value={{ toasts, setToasts }}>
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
      <ToasterWrapper toasts={toasts} />
    </ToasterContext.Provider>
  );
};

export default App;
