import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch } from 'react-redux';
import { search } from '../redux/restaurantslice';


function Header() {
  const dispatch=useDispatch()
  return (
    <div>
        <Navbar className="bg-warning">
        <Container>
          <Navbar.Brand href="#home">
          <h4><span className='text-danger '><i c class="fa-solid fa-plate-wheat"></i>Food</span> Circle</h4>
          
          
          </Navbar.Brand>
          <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search by neighbourhood"
              className=" mr-sm-2"
              onChange={(e)=>dispatch(search(e.target.value))}
            />
          </Col>
          
        </Row>
      </Form>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header