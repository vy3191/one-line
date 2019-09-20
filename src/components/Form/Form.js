import React, {useState, useEffect} from 'react';
import { Route, NavLink} from 'react-router-dom';
import SignUp from './SignUp';
import SignIn from './SignIn';
import './Form.scss';

export default function Form() {
  return(
    <div className='sign-up-sign-in-form'>
      <div className='nav-links'>
        <NavLink to='/sign-up'>
          <button variant="primary" size="lg" className='custom-btn'>Sign Up</button>
        </NavLink>
        <NavLink to='/sign-in'>
           <button variant="primary" size="lg" className='custom-btn'>Sign In</button>
        </NavLink>
      </div>     
      <div>
        <Route exact path='/sign-up' render={(props) => <SignUp {...props}/>} />
        <Route exact path='/sign-in' render={(props) => <SignIn {...props}/>} />
      </div>
    </div>
  );
}

