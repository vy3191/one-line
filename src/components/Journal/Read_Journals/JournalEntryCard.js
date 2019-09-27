import React from 'react';
import {CardGroup, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function JournalEntryCard(props) {

  // console.log(props.journal);
  //  const title = props.journal.title;
  //  const id = props.journal.id;
  //  const contents = props.journal.contents;
  //  const date = props.journal.created_at;
  const {title, contents,created_at, id, user_id} = props.journal;  

  return(
   
    <div>      
        <CardGroup className='card-group'>
       
          <Card>    
          <Link to={`/welcome/single-journal/${id}`}>  
            <Card.Body>             
                <Card.Title>{title}</Card.Title>            
              <span>{id}</span>             
              <hr />
              <Card.Text>
                {contents}
              </Card.Text>
            </Card.Body>
            </Link> 
            <Card.Footer>
              <small className="text-muted">Updated On: {created_at} </small>
            </Card.Footer>
          </Card>  
            
        </CardGroup>      
    </div>
    
  );
}