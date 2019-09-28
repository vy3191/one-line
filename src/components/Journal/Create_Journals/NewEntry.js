import React, {useState, useEffect} from 'react';
import { Form, Button } from 'react-bootstrap';
import {Redirect} from 'react-router-dom';
import './NewEntry.scss';


export default function NewEntry(props) {
  console.log(props)
  const { id, postJournals } = props;
  const [myJournal, setMyJournal] = useState({title:'', contents:'', creating: false});  

  useEffect( () => {
    
  },[])
  
  const inputHandler = (event) => {
      setMyJournal({...myJournal, [event.target.name]: event.target.value});
  }

  const submitHandler = (event) => {
       event.preventDefault();
       if(myJournal.title && myJournal.contents) {            
             postJournals(myJournal,id);
       }
       setMyJournal({
          title:'',
          contents:'',
          creating: true
       })   
  }

  

   return(
    <>
      <div className='form-container'>  
      <h4>New Journal Entry</h4>  
      <Form onSubmit={submitHandler} >     
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label className='title'>Title:</Form.Label>
          <Form.Control type="text"
                        name='title'
                        value={myJournal.title}
                        onChange={inputHandler}
                        placeholder="Enter Your Title Here" />
        </Form.Group>             
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label className='title'>Your Journal Entry Here:</Form.Label>
          <Form.Control as="textarea"
                        rows="3"
                        name='contents'
                        value={myJournal.contents}
                        onChange={inputHandler} />
        </Form.Group>
        <Button className='submit-button' variant="primary" type="submit">Submit</Button>
    </Form>
    </div> 
    </>
   )
}