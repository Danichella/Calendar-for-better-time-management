import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exec element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign_up" element={<SignUp />} />
        <Route path="/accounts/edit" element={<EditAccountDetails />} />
        <Route path="/accounts" element={<AccountDetails />} />
        <Route path="/events/edit" element={<EditEventDetails />} />
        <Route path="/events/new" element={<AddNewEvent />} />
        <Route path="/events" element={<EventDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
