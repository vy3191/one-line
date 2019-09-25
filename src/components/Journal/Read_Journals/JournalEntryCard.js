import React from 'react';
import {CardGroup, Card} from 'react-bootstrap';

export default function JournalEntryCard(props) {
  console.log(props.journal);
  const {title, textBody} = props.journal;

  const getDate = () => {
    const dateObj = new Date();
    const month = dateObj.getMonth() + 1; 
    const day = dateObj.getDate();
    const year = dateObj.getFullYear();
    return year + "/" + month + "/" + day;
  }

  return(
    <div>
      <CardGroup className='card-group'>
        <Card>          
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              {textBody}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Updated On: {getDate()} </small>
          </Card.Footer>
        </Card>      
      </CardGroup>
    </div>
  );
}