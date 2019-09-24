import React, {useState, useEffect} from 'react';
import {NavLink, Route, Switch} from 'react-router-dom';
import TenYearEntries from './TenYear';
import NewEntry from './NewEntry';
import JournalEntries from './JournalEntries';
import Image from './Image';
import  './Journal.scss';
import axios from 'axios';

export default function Welcome() {
    const [journalNotes, setJournalNotes] = useState([]);
    useEffect( () => {
       
    });
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
                        <Route exact path='/welcome/journal-entries' render={(props) => <JournalEntries {...props}/>} />
                        <Route path='/welcome/ten-year-entries' render={(props) => <TenYearEntries {...props}/>} />
                        <Route path='/welcome/new-entries' render={(props) => <NewEntry /> } />
                        <Route render={(props) => <Image {...props} />} />
                    </Switch>
                </div>   
            </div>         
        </div>
    )
}
