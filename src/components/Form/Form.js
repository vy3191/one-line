import React, {useState, useEffect} from 'react';
import { Route, NavLink, Switch} from 'react-router-dom';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Welcome from '../Journal/Welcome';
import './Form.scss';


export default function Form() {
  
  return(
    <div className='sign-up-sign-in-form'>
      <div className='nav-links'>
        <NavLink to='/'>
          <button  size="lg" className='custom-btn'>Sign Up</button>
        </NavLink>
        <NavLink to='/sign-in'>
           <button  size="lg" className='custom-btn'>Sign In</button>
        </NavLink>
      </div> 
    </div>
  );
}

