import React, {useState,useEffect} from 'react';
import { withFormik, Form, Field } from "formik";
import {withRouter,Route, NavLink, Redirect} from 'react-router-dom';
import Loading from '../Load/Loading';
import {Button} from 'react-bootstrap'
import * as yup from 'yup';
import axios from 'axios';
import './Form.scss';

function SignUp (props){
  const {errors,touched, status}= props;
   console.log(status)
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if(status) {
       setUsers([...users, status])
    }
  }, [status]);

//  if(users[users.length-1].username.length) {
//     return <Loading />
//  }

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
       <Button className='sign-button' type='submit' variant="danger" size="lg">Sign Up</Button>
    </div>
  
   { users.length>0 && <p className='success-msg'>{users[users.length-1].username} successfully signed up</p>}
   { users.length === 0 && <p>Welcome to One line a day</p>}   
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
      
      axios.post("https://bw-one-line-a-day.herokuapp.com/api/auth/register", values)
           .then( response => {              
              console.log(response.data.user)
              console.log('Line70', FormikBag);
              FormikBag.setStatus(response.data.user);
              FormikBag.props.history.push('/loading');
              setTimeout(() =>{
                FormikBag.props.history.push('/sign-in')
              },2000);
             
           })
           .catch( error=> {
              console.log(typeof error)
              console.log(error.response.status)
              console.log(typeof error.response.status)
              if(error.response.status===500) {
                  FormikBag.props.history.push('/loading');
                setTimeout( () => {
                  FormikBag.props.history.push('/server-error');
                  FormikBag.setStatus(error);
                })                 
              }
           })
   }
})(SignUp));