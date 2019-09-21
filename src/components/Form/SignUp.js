import React, {useState,useEffect} from 'react';
import { withFormik, Form, Field } from "formik";
import {withRouter} from 'react-router-dom';
import {Button} from 'react-bootstrap'
import * as yup from 'yup';
import axios from 'axios';
import './Form.scss';

function SignUp (props){
  const {errors,touched, status}= props;
   console.log(status)
  const [users, setUsers] = useState([]);
  useEffect(() => {
    if(status) {
       setUsers([...users, status])
    }
  }, [status])

 return(
   <Form>
    { touched.username && errors.username && <p className='error'>{errors.username}</p>}
    <Field type="text" name="username" placeholder="username"/>
    
    {errors.password && touched.password && <p className='error password'>{errors.password}</p>}
    <Field type="password" name="password" placeholder="password"/>    
    <div className='sign-in-sign-up-button'>
       <Button type='submit' variant="danger" size="lg">Sign Up</Button>
    </div>
  
   { users.length>0 && <p className='success-msg'>{users[users.length-1].username} successfully signed up</p>}
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
      axios.post("https://bw-one-line-a-day.herokuapp.com/api/auth/register", values)
           .then( response => {              
              console.log(response.data.user)
              FormikBag.setStatus(response.data.user);
              setTimeout(() =>{
                FormikBag.props.history.push('/sign-in')
              },2000);
             
           })
           .catch( error=> {
              console.log(error)
           })
   }
})(SignUp));