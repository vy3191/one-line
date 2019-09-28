import React, {useState} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link, withRouter} from 'react-router-dom';
import SESSION_STORE_KEY from '../../Constants/constants';
import './Navbar.scss';

function Header(props) {
    const Logged_in_user = sessionStorage.getItem(SESSION_STORE_KEY);
    const user = JSON.parse(Logged_in_user);
     console.log('line 10', user)
    const [sessionKey, setSessionKey] = useState('');
    const handleUser = () => {
        setSessionKey(Logged_in_user);
        sessionStorage.removeItem(SESSION_STORE_KEY);
        props.history.push('/sign-in');
    }
   return(
    <Navbar className='header' style={{background: 'rgba(0,0,0,.5)', color: '#FFFFFF'}}>
      <Link to='/sign-in'>
         <Navbar.Brand href="#home" style={{color:'#FFF'}}>Home</Navbar.Brand>
      </Link>
      <Nav className="mr-auto">
        <p className='one-day-a-line'>One-line-a-day-journal</p>
        {console.log(Logged_in_user)}
      </Nav> 
      { Logged_in_user && <p className='welcome-msg'> welcome{' '}{user.name}</p>}
      <Link>
        <Nav>         
          { Logged_in_user && <button className='logout-button' onClick={handleUser}>Logout</button>}
        </Nav>
      </Link>   
    </Navbar>
   )
}

export default withRouter(Header);