import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Restreview from '../components/Restreview';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Restview() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const params=useParams()
  console.log(params.id);
  const alrestaurant=useSelector((state)=>state.restaurantslice.alrestaurant)
  console.log(alrestaurant);
  
  const items=alrestaurant.find(item=>item.id==params.id)
  console.log(items);
  const ophours=useSelector((state)=>state.restaurantslice.reviews)
  console.log(ophours);
  


  return (
    <div className='container'>
        <Row>
            
            <Col md={4}>
                <br />
                <br />
                <img src="https://images.creativemarket.com/0.1.0/ps/1356231/1360/2040/m1/fpnw/wm1/mcizj3bwmpwctf7oohy2ptbjhrz7ee203kwtadfcw7scon5sx4lgfuvze9xrlvxx-.jpg?1465631648&s=f205458110fa2a03e31139dc6075648a" alt="" width={'400px'} />
            </Col>
            <Col md={8}>
                <br />
                <br />
               <center> <h4><span className='text-danger'>Restaurant</span> <span className='text-info'>Details</span></h4></center>
               <ListGroup className='w-100'>
              <center> <ListGroup.Item><b>Restaurant Name</b></ListGroup.Item></center>
      <ListGroup.Item>Neighbourhood:{items?.neighborhood}</ListGroup.Item>
      <ListGroup.Item>Cuisine Type:{items?.cuisine_type}</ListGroup.Item>
      <ListGroup.Item>Address:{items?.address}</ListGroup.Item>
      
      <ListGroup.Item className='p-4 text-center'>
      <Button  className='btn btn-warning me-3' onClick={handleShow}>
        Operating Hours 
      </Button>
      <Restreview items={items?.reviews}/>
      </ListGroup.Item>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Operating Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
               <ListGroup.Item>Monday:{items?.operating_hours.Monday}</ListGroup.Item>
      <ListGroup.Item>Tuesday:{items?.operating_hours.Tuesday}</ListGroup.Item>
      <ListGroup.Item>Wednesday:{items?.operating_hours.Wednesday}</ListGroup.Item>
      <ListGroup.Item>Thursday:{items?.operating_hours.Thursday}</ListGroup.Item>
      <ListGroup.Item>Friday:{items?.operating_hours.Friday}</ListGroup.Item>
      <ListGroup.Item>Saturday:{items?.operating_hours.Saturday}</ListGroup.Item>
      <ListGroup.Item>Sunday:{items?.operating_hours.Sunday}</ListGroup.Item>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
      
      
    </ListGroup>
            </Col >
        </Row>
    </div>
  )
}

export default Restview