import React, {useState, useEffect} from 'react';
import {CardGroup, Modal, Card} from 'react-bootstrap';
// import SESSION_STORE_KEY from  '../../../Constants/constants';
// import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import './SingleJournal.scss';

export default function SingleJournalCard(props) {
   const {id} = props.match.params;      
   const [singleJournal, setSingleJournal] = useState({});
   const [newJournal, setNewJournal] = useState({});
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

  useEffect( () => {
    const journal = props.journals.filter( singleJournal => (singleJournal.id == id))[0];
    setSingleJournal(journal);
    setNewJournal(journal);
   },[])

  const delJournal = () => {
      props.removeJournals(id)
  }

  const updateJournal = () => {      
      handleShow();
  }

  const handleInput = (event) => {
     setNewJournal({...newJournal, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
      event.preventDefault();
      props.editJournals(newJournal, id);
  }

   return(   
    <div>      
      <CardGroup className='card-group'>          
          <Card> 
          <div className='del-edit-buttons'>   
              <span className='id'>Your Journal id{}#{id}</span>        
              <button className='edit' onClick={updateJournal}>Edit</button>
              <button className='del' onClick={delJournal}>Delete</button>
          </div>
            <Card.Body className='card-body'>           
              <Card.Title>Title:{singleJournal.title}</Card.Title> 
              <hr />
              <Card.Text>
                {singleJournal.contents}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Updated On: {singleJournal.created_at} </small>
            </Card.Footer>
          </Card>      
      </CardGroup>
      <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Your Journal Here</Modal.Title>
          </Modal.Header>
          <Form onSubmit={handleSubmit}> 
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Title:</Form.Label>
                  <Form.Control type="text"
                                name='title'
                                value={newJournal.title}
                                onChange={handleInput}
                                placeholder="Enter Your Title Here" />
                </Form.Group>             
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Your Journal Entry Here:</Form.Label>
                  <Form.Control as="textarea"
                                rows="3"
                                value={newJournal.contents}
                                onChange={handleInput}
                                name='contents' />
                  </Form.Group>               
                <Button variant="secondary" onClick={handleClose}>Close</Button>
              <Button type='submit' variant="primary" onClick={handleClose}>Save Changes </Button>
            </Form>          
        </Modal>            
    </div>
    
  );
}