import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Restcard({item}) {
  return (
    <div>
         <Link to={`/restaurantview/${item.id}`} style={{textDecoration:'none'}}>
             <Card style={{ width: '80%',boxShadow:'inherit' }}>
          <Card.Img   variant="top" src={item.photograph} />
          <Card.Body>
            <center><Card.Title className='text-warning'><b>{item.name}</b></Card.Title></center>
            <div className='d-flex justify-content-between'>
                
                <Card.Text >
                  {item.neighborhood}
                </Card.Text>
                <Card.Text >
                  {item.cuisine_type}
                </Card.Text>
               
            </div>
          </Card.Body>
        </Card>
         </Link>
    </div>
  )
}

export default Restcard