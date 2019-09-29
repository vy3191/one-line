import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import SESSION_STORE_KEY from '../../../Constants/constants';


export default function PrivateRoute({component:Component, ...rest}) {
  const Logged_in_user = sessionStorage.getItem(SESSION_STORE_KEY);
  const user = JSON.parse(Logged_in_user);
  const token = user.token;
  console.log(token);
    return(
           <Route {...rest} render={ (props) => (
              token.length > 0
              ? <Component {...props} />
              : <Redirect to='/sign-in' />

           )} />
    );
}