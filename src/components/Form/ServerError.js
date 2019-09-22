import React from 'react';
import Server from '../Img/Server.png';
import {Link} from 'react-router-dom';


export default function ServerError(props) {
   return(
      <div className='server-error'>
        <h1>Internal Server Error</h1>
        <img width={600} heigh={600} src={Server} alt="Server-Error" />
        <Link to='/'>
           <div className='server-error-div'> {'<<<'} Previous Page</div>
        </Link>
      </div>
   );
}