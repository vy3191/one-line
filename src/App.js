import React from 'react';
import {Route, NavLink, Switch} from 'react-router-dom';
import Header from '../src/components/Navbar/Navbar';
import SignUp from '../src/components/Form/SignUp';
import SignIn from '../src/components/Form/SignIn'
import Welcome from './components/Journal/Welcome';
import ServerError from './components/Form/ServerError';
import Loading from './components/Load/Loading';
import './App.css';
function App() {
   
  return (
    <div className="App">
      <Header />
      
      <div>
        <Switch>
          <Route exact path='/' render={(props) => <SignUp {...props}/>} />
          <Route  path='/sign-in' render={(props) => <SignIn {...props}/>} />
          <Route  path='/welcome' render={(props) => <Welcome {...props} />} />
          <Route path='/server-error' render={(props) => <ServerError />} />
          <Route path='/loading' render={(props) => <Loading />} />
        </Switch> 
      </div>    
    </div>
  );
}

export default App;
