import React from 'react';
import {CardGroup, Card} from 'react-bootstrap';
import JournalEntryCard from './JournalEntryCard';
import SESSION_STORE_KEY from '../../../Constants/constants';

export default function JournalEntries(props) {
    console.log(props.journals);
   return(
     <div>
     <h2>Journal Entries </h2>
     {
        props.journals.map( (journal,index) => {
           return <JournalEntryCard key={index} journal={journal}/>
        })
     }
    </div>
   )
}