import React from 'react';
import {Route, NavLink} from 'react-router-dom';
import EntryForm from './components/Journal/EntryForm';
import TenYear from './components/Journal/TenYear';
import Form from '../src/components/Form/Form';
import Header from '../src/components/Navbar/Navbar';

import './App.css';
function App() {
   
  return (
    <div className="App">
      <Header />
      <Form />      
    </div>
  );
}

export default App;
