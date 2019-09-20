import React, {useState,useEffect} from 'react';
import { withFormik, Form, Field } from "formik";
import * as yup from 'yup';
import axios from 'axios';

function SignUp (props){
  const {errors,touched, status}= props;
  const [users, setUsers] = useState([]);
  useEffect(() => {
    if(status) {
       setUsers([...users, status])
    }
  }, [status])
  
 return(
   <Form>
    { touched.name && errors.name && <p className='error'>{errors.name}</p>}
    <Field type="text" name="name" placeholder="name"/>
    
    {errors.password && touched.password && <p className='error'>{errors.password}</p>}
    <Field type="password" name="password" placeholder="password"/>
    
    <button type="submit">Sign Up</button>
    
   </Form>
  )
};

export default withFormik({
   mapPropsToValues: (values) => {
     return {
       name: values.name || '',
       email: values.email || '',
       password: values.password || '',
       role: values.role || '',
       service: values.service || ''
     }
   },
   validationSchema: yup.object().shape({
      name:yup.string().required("Username is required"),      
      password:yup.string().required() .min(8, 'Should be at lease 8 characters')         
   }),
   handleSubmit: (values, {setStatus}) => {
      console.log(values);
      axios.post("https://reqres.in/api/users", values)
           .then( res => {              
              setStatus(res.data);

           })
           .catch( error=> {
              console.log(error)
           })
   }
})(SignUp);