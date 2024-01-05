import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import Restcard from '../components/Restcard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchrestaurant } from '../redux/restaurantslice'


function Home() {
const alrestaurant=useSelector((state)=> state.restaurantslice.alrestaurant)
console.log(alrestaurant);

const dispatch=useDispatch()


useEffect(()=>{
    dispatch(fetchrestaurant())

},[])

  return (
    <div>
        <Row>
            {alrestaurant?.length>0?
            alrestaurant.map((Item)=>( <Col className='px-5 py-3' sm={6} md={4}>
            <Restcard item={Item}/>
        </Col> )):<p></p>
            }
           
           
        </Row>
    </div>
  )
}

export default Home