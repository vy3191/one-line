import React from 'react';
import './App.css';
import EntryForm from './components/Journal/EntryForm';
import TenYear from './components/Journal/TenYear';
import RecentEntries from './components/Journal/RecentEntries';
import Form from '../src/components/Form/Form';
import Header from '../src/components/Navbar/Navbar';


function App() {
   
  return (
    <div className="App">
      <Header />
      <Form />
    </div>
  );
}

export default App;
