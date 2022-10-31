import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Navbar, Landing, Login, Register } from './components/';
import { Dashboard } from './components/dashboard/Dashboard';
import Mockman from "mockman-js";
import { PrivateRoute } from './PrivateRoute';
import { MyProfile } from './components/MyProfile';

function MockAPI() {
  return (
    <div className="MockAPI">
      <Mockman />
    </div>
  );
}


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mockman" element={MockAPI()} />
        <Route element={<PrivateRoute />} >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/myProfile" element={<MyProfile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
