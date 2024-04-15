import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/home/Home.jsx';
import Login from './pages/login/Login.jsx';
import SignUp from './pages/signup/SignUp.jsx';
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext';

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "./dashboard/src/layouts/Admin.js";
import AuthLayout from "./dashboard/src/layouts/Auth.js";

function App() {
  const {authUser} = useAuthContext();
  return (
    <div className='p-4 h-screen flex items-center justify-center'>      
      <Routes>
        <Route path='/' element={ authUser ? <Home /> : <Navigate to={'/login'} />  } />
        <Route path='/login' element={ authUser ? <Navigate to={'/'} /> : <Login /> } />
        <Route path='/signup' element={ authUser ? <Navigate to={'/'} /> : <SignUp /> } />

        <Route path="/admin/*" element={<AdminLayout />} />
        <Route path="/auth/*" element={<AuthLayout />} />
        <Route path="*" element={<Navigate to="/admin/index" replace />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App;
