import React, {useState} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link, withRouter} from 'react-router-dom';
import SESSION_STORE_KEY from '../../Constants/constants';
import './Navbar.scss';

function Header(props) {
    const Logged_in_user = sessionStorage.getItem(SESSION_STORE_KEY);
    const [sessionKey, setSessionKey] = useState('');
    const handleUser = () => {
        setSessionKey(Logged_in_user);
        sessionStorage.removeItem(SESSION_STORE_KEY);
        props.history.push('/sign-in');
    }
   return(
    <Navbar bg="primary" variant="dark">
      <Link to='/sign-in'>
         <Navbar.Brand href="#home">Home</Navbar.Brand>
      </Link>
      <Nav className="mr-auto">
        <p className='one-day-a-line'>One-day-a-line</p>
        {console.log(Logged_in_user)}
      </Nav> 
      <Link>
        <Nav>
          { Logged_in_user && <button onClick={handleUser}>Logout</button>}
        </Nav>
      </Link>   
    </Navbar>
   )
}

export default withRouter(Header);