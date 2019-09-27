import React, {useState, useEffect} from 'react';
import { Form, Button } from 'react-bootstrap';
import {Redirect} from 'react-router-dom';



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
    //  console.log('working @ line 26');
    //  props.history.push('/welcome/journal-entries');
  }

  

   return(
    <div>
      <h2>New Entry</h2>
      <Form onSubmit={submitHandler} >
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Title:</Form.Label>
          <Form.Control type="text"
                        name='title'
                        value={myJournal.title}
                        onChange={inputHandler}
                        placeholder="Enter Your Title Here" />
        </Form.Group>             
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Your Journal Entry Here:</Form.Label>
          <Form.Control as="textarea"
                        rows="3"
                        name='contents'
                        value={myJournal.contents}
                        onChange={inputHandler} />
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
    </Form>
    </div>
   )
}