import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from '../src/components/Navbar/Navbar';
import SignUp from '../src/components/Form/SignUp';
import SignIn from '../src/components/Form/SignIn'
import Welcome from './components/Journal/Welcome';
import ServerError from './components/Errors/ServerError';
import UnauthorizedError from './components/Errors/UnauthorizedError';
import PageNotFound from './components/Errors/PageNotFound';
import Loading from './components/Load/Loading';
import './App.css';


function App() {
 
  return (
    <div className="App">
      <Header />      
      <div className='main-container'>
        <Switch>
          <Route exact path='/' render={(props) => <SignUp {...props}/>} />
          <Route  path='/sign-in' render={(props) => <SignIn {...props}/>} />
          <Route  path='/welcome' render={(props) => <Welcome {...props} />} />
          <Route path='/server-error' render={(props) => <ServerError />} />
          <Route path='/unauthorized-error' render={(props) => <UnauthorizedError /> } />
          <Route path='/page-not-found' render={(props) => <PageNotFound /> } />
          <Route path='/loading' render={(props) => <Loading />} />
          <Route render={(props) => <SignIn {...props} /> } />
        </Switch> 
      </div>    
    </div>
  );
}

export default App;
