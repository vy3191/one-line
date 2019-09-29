import React from 'react';
import {Link} from 'react-router-dom';
import './Errors.scss'

export default function ServerError(props) {
   return(
      <div className='server-error'>
        <h1>500: Internal Server Error</h1>
        <p>There is a problem with the resource you are looking for.</p>
        <Link to='/'>
           <div className='server-error-div'> {'<<<'} Previous Page</div>
        </Link>
      </div>
   );
}