import React, {useState, useEffect} from 'react';
import {NavLink, Route, Switch} from 'react-router-dom';
import JournalEntries from './Read_Journals/JournalEntries';
import TenYearEntries from './TenYear';
import NewEntry from './Create_Journals/NewEntry';

import Image from './Image';
import axios from 'axios';
import  './Journal.scss';


export default function Welcome() {
    const [journals, setJournals] = useState([]);
    useEffect( () =>  {       
        getJournals();
    },[]);

  const getJournals = () => {
        axios.get('https://fe-notes.herokuapp.com/note/get/all')
        .then( response => {
             console.log(response.data);
             setJournals(response.data);
        })
        .catch(err => {
            console.log(err);
        })
  }

  console.log(journals)
  return (
      <div className='journal-entries'>
        <h1>Journal Entries Journey</h1>
        <div className='journal-container'>           
          <div className='journal-links'> 
            <h3>Your Actions</h3>  
            <hr style={{width:'100%'}}/>                     
            <ul>
                <li><NavLink to='/welcome/journal-entries'>View Your Recent Entries</NavLink></li>
                <li><NavLink to='/welcome/ten-year-entries'>View Last Ten Years Entries</NavLink></li>
                <li><NavLink to='/welcome/new-entries'>Add New Entries</NavLink></li> 
            </ul>      
          </div>
            <div className='journals'>                   
              <Switch>
                <Route exact path='/welcome/journal-entries' 
                       render={(props) => <JournalEntries {...props} journals={journals}/>} />
                <Route path='/welcome/ten-year-entries' 
                       render={(props) => <TenYearEntries {...props}/>} />
                <Route path='/welcome/new-entries' 
                       render={(props) => <NewEntry /> } />
                <Route render={(props) => <Image {...props} />} />
              </Switch>
            </div>   
        </div>         
      </div>
    )
}
