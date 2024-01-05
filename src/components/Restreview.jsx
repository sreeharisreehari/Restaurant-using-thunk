import React from 'react'

import Collapse from 'react-bootstrap/Collapse';
import { useState } from 'react';

function Restreview({items}) {

const [open, setOpen] = useState(false);

return (
  <>
      <button onClick={()=>setOpen(!open)} className='btn btn-warning m-3'>Click Here To See Reviews</button>
      <Collapse in={open}>
      <div>
        {
          items?.map((item)=>(<>
          <hr />
        
        <h6>Name: {item.name}  <br /> Date: {item.date} </h6>
        <p>rating:{item.rating} </p>
        <p>description:{item.comments} </p>
          </>
         

          ))

        }
        
      </div>
    </Collapse>
  </>
)

}

export default Restreview