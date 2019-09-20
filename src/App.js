import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginSignup from './components/User/LoginSignup';
import Profile from './components/User/Profile';
import EntryForm from './components/Journal/EntryForm';
import TenYear from './components/Journal/TenYear';
import RecentEntries from './components/Journal/RecentEntries';
import Form from '../src/components/Form/Form';


function App() {
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
