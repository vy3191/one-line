import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginSignup from './components/User/LoginSignup';
import Profile from './components/User/Profile';
import EntryForm from './components/Journal/EntryForm';
import TenYear from './components/Journal/TenYear';
import RecentEntries from './components/Journal/RecentEntries';

function App() {
  return (
    <div className="App">
      <LoginSignup />
      <Profile />
      <EntryForm />
      <TenYear />
      <RecentEntries />
    </div>
  );
}

export default App;
