import React, {useState,useEffect} from 'react';
import { withFormik, Form, Field } from "formik";
import {withRouter, Link, NavLink } from 'react-router-dom';
import {Button} from 'react-bootstrap'
// import Welcome from '../Journal/Welcome';
import * as yup from 'yup';
import axios from 'axios';
import SESSION_STORAGE_KEY from '../../Constants/constants'
import './Form.scss';

function SignIn (props){
  const {errors,touched, status}= props;
  const [users, setUsers] = useState([]);
  const [errorCode, setErrorCode] = useState()
  // console.log(status)
  useEffect(() => {
    if(status) {
       setUsers([...users, status])
    }
  }, [status])
  // console.log(users)
 return(
   <Form>
    <div className='sign-up-sign-in-form'>
      <div className='nav-links'>
        <NavLink to='/'>
          <button  size="lg" className='custom-btn'>Sign Up</button>
        </NavLink>
        <NavLink to='/sign-in'>
           <button  size="lg" className='custom-btn'>Sign In</button>
        </NavLink>
      </div> 
    </div>
    { touched.username && errors.username && <p className='error'>{errors.username}</p>}
    <Field type="text" name="username" placeholder="username"/>
    
    {errors.password && touched.password && <p className='error password'>{errors.password}</p>}
    <Field type="password" name="password" placeholder="password"/>
    <div className='sign-in-sign-up-button'>
        <Button className='sign-button' type='submit' variant="success" size="lg">Sign In</Button>
    </div>
    {users[0] != 401 && <p>Please {" "}<Link to='/'><span>sign up here</span></Link></p>}
    {users[0] == 401 && <p style={{color: 'red', fontWeight: 'bold'}}>Invalid Credentials</p>}
    
   </Form>
  )
};

export default withRouter(withFormik({
   mapPropsToValues: (values) => {
     return {
       username: values.name || '',       
       password: values.password || ''
       
     }
   },
   validationSchema: yup.object().shape({
      username:yup.string().required("Username is required"),      
      password:yup.string().required() .min(3, 'Should be at lease 8 characters')         
   }),
   handleSubmit: (values, FormikBag) => {
      console.log(values);
      axios.post("https://bw-one-line-a-day.herokuapp.com/api/auth/login", values)
           .then( res => {  
              console.log('sign-in',res.data)  
              const myUser = {name: res.data.user.username, 
                              id: res.data.user.id,                              
                              token: res.data.token};
              console.log('Line 68 sign-in', myUser);       
              FormikBag.setStatus(res.data);
              sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(myUser));
              FormikBag.resetForm();
              FormikBag.props.history.push('/welcome');
           })
           .catch( error=> {
            if (error.response) {
              console.log(error.response.data);
              console.log(error.response.status);
              FormikBag.setStatus(error.response.status);
              }  
           })
   }
})(SignIn));