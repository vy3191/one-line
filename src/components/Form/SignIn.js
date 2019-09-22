import React, {useState,useEffect} from 'react';
import { withFormik, Form, Field } from "formik";
import {withRouter, Link,Route, NavLink, Switch} from 'react-router-dom';
import {Button} from 'react-bootstrap'
import Welcome from '../Journal/Welcome';
import * as yup from 'yup';
import axios from 'axios';
import SESSION_STORAGE_KEY from '../../Constants/constants'
import './Form.scss';





function SignIn (props){
  const {errors,touched, status}= props;
  const [users, setUsers] = useState([]);
  console.log(status)
  useEffect(() => {
    if(status) {
       setUsers([...users, status])
    }
  }, [status])
  console.log(users)
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
    <p>Please {" "} 
         <Link to='/'>
            <span>sign up here</span>.
         </Link>
    </p>
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
              console.log(res.data)            
              FormikBag.setStatus(res.data);
              sessionStorage.setItem(SESSION_STORAGE_KEY, res.data.token);
              FormikBag.resetForm();
              FormikBag.props.history.push('/welcome');
           })
           .catch( error=> {
              console.log(error)
           })
   }
})(SignIn));