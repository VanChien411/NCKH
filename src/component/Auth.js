
import Login from './auth/Login';
import Register from './auth/Register';
import Home from '../view/home';

import { Route, Routes, Link, BrowserRouter as Router } from 'react-router-dom' ;

function Auth() {
    
  return (
   
  <Routes>
   
    <Route path={'/'} element={<Login />}></Route>
    <Route path={'/login'} element={<Login />}></Route>
    <Route path={'/register'} element={<Register />}></Route>
    <Route path={'/home'} element={<Home />}></Route>

  </Routes>
   
  );
}

export default Auth;
