
import Login from './auth/Login';
import Register from './auth/Register';
import Home from '../view/home';
import Page from '../view/page';


import { Route, Routes, Link, BrowserRouter as Router } from 'react-router-dom' ;
export function Start(){
    window.location.assign('/login');
}
function Auth() {
    
  return (
   
  <Routes>
   
    <Route path={'/'} element={<Start />}></Route>
    <Route exact path={'/login'} element={<Login />}></Route>
    <Route path={'/register'} element={<Register />}></Route>
    <Route path={'/home'} element={<Home />}></Route>
    <Route path={'/page'} element={<Page />}></Route>

    
  </Routes>
   
  );
}

export default Auth;
