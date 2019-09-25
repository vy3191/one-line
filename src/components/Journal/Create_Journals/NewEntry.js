import React, {useState, useEffect} from 'react';
import { withFormik, Form, Field } from 'formik';
import { withRouter, Route, NavLink, Redirect } from 'react-router-dom';
import * as yup from 'yup';
import axios from 'axios';
import { Button } from 'react-bootstrap';


export default function NewEntry() {
   const [myJournal, setMyJournal] = useState({title:'', textBody:''});

   return(
    <div>
      <h2>New Entry</h2>
    </div>
   )
}