import React, {useState, useEffect} from 'react';
import {NavLink, Route} from 'react-router-dom';
import TenYearEntries from './TenYear';
import NewEntry from './NewEntry';
import JournalEntries from './JournalEntries';
import Image from '../../DesignFiles/notes1.svg';
import  './Journal.scss';
import axios from 'axios';

export default function Welcome() {
    const [journalNotes, setJournalNotes] = useState([]);
    useEffect( () => {
       axios.get()
    })
    return (
        <div className='journal-entries'>
            <h1>Journal Entries</h1>
            <div className='journals'>            
                <ul>
                <li><NavLink to='/journal-entries'>View Last Week Entries</NavLink></li>
                <li><NavLink to='/ten-year-entries'>View Ten Years Entries</NavLink></li>
                <li><NavLink to='/new-entries'>Add New Entries</NavLink></li> 
                </ul>             
                <img width={400} src={Image} atl='Journal-Notes' />             
            </div>
            <div>
               <Route path='/journal-entries' render={(props) => <JournalEntries {...props}/>} />
               <Route path='/ten-years-entries' render={(props) => <TenYearEntries {...props}/>} />
               <Route path='/new-entries' render={(props) => <NewEntry /> } />
            </div>            
        </div>
    )
}
