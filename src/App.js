import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/layouts/Navbar/Navbar';
import { Landing } from './components/Landing/Landing';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Dashboard } from './components/dashboard/Dashboard';



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
