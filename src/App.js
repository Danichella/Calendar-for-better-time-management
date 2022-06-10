import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
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
  const [toasts, setToasts] = useState([]);

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
