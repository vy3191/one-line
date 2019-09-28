import React from 'react';
import {Link} from 'react-router-dom';

export default function EmptyJournalsPage() {
   return(
     <div className='empty-list'>
        <h2>You have no saved journals now.</h2> 
        <Link to='/welcome/new-entries'>
          <div className='start-journals'>Start Creating New Journals</div> 
        </Link>        
     </div>
   )
}