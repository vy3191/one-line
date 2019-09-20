import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, NavLink} from 'react-router-dom';
import SignUp from './SignUp';
import SignIn from './SignIn';
function Form() {
  return(
    <React.Fragment>
      <div>
        <NavLink to='/sign-up'>Sign Up</NavLink>
        <NavLink to='/sign-in'>Sign In</NavLink>
      </div>
      <hr/>
      <div>
        <Route path='sign-up' render={(props) => <SignUp {...props}/>} />
        <Route path='sign-in' render={(props) => <SignIn {...props}/>} />
      </div>
    </React.Fragment>
  );
}