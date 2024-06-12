import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';

const Cards = (props) => {
  return (
    <>
       <div className='col-md-4 col-10 mx-auto'>
        <Card>
              <Card.Img variant="top" src={props.imgsrc}/>
              <Card.Body>
              <Card.Title className='font-weight-bold'>{props.title}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
               <NavLink to=" "> <Button variant="primary">Go somewhere</Button> </NavLink>
              </Card.Body>
            </Card>
            </div>
    </>
  )
}

export default Cards