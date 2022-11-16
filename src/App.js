
import './App.css';
import Auth from './component/Auth';
import { Route, Routes, Link, BrowserRouter as Router } from 'react-router-dom';
import { useState, useEffect, Component } from "react";
import { connect } from 'react-redux';
import * as actions from './redux/actions';

function App(props){
  

  
   
    useEffect(() => {
  
      console.log('sta',props.status)
      console.log(window.location.pathname)
      console.log('dk', !props.status && window.location.pathname != '/login' && window.location.pathname != '/register')
       console.log('dk2', props.status && (window.location.pathname != '/login') )
       
      if (!props.status && window.location.pathname != '/login' && window.location.pathname != '/register')
        {
          window.location.assign('/login');
          
            console.log('state app', props.status)
        }
        else if (props.status && (window.location.pathname == '/login' || window.location.pathname == '/register' || window.location.pathname == '/'))
        {
          console.log('home ', window.location.pathname)
          window.location.assign('/home');
        }
     
        function handleCredentialResponse(response) {
          console.log("Encoded JWT ID token: " + response.credential);
        }
       
         
      
      },[])

    return (
      <Router>
   
    
        <Auth />

      </Router>
      //accectokon
    );
  
}


const mapStateToProps = state =>{
  return {
      status : state.status
  }
};

const mapDispatchToProps = (dispatch, props) =>{
  return {
      addStatus : (status) =>{
          dispatch(actions.status(status))
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
