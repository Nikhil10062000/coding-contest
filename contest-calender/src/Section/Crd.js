import React from 'react'
import Card from 'react-bootstrap/Card';
import {Table} from "react-bootstrap"
const Crd = ({cont}) => {
  console.log(cont)
  return (
   
    <Card style={{ width: '18rem' }} className="hover:w-80 ">
    <Card.Body>
      <Card.Title className=' text-emerald-600'>{cont.name}</Card.Title>
      <hr/>
      <Card.Subtitle className="mb-2 text-muted"> <h6 className='font-semibold text-pink-700'>Start Time :</h6> {cont.start_time} </Card.Subtitle>
      <Card.Subtitle className="mb-2 text-muted"><h6 className='font-semibold text-pink-700'>End Time :</h6>{cont.end_time} </Card.Subtitle>
      <Card.Subtitle className="mb-2 text-muted"><h6 className='font-semibold text-pink-700'>Duration Time :</h6>{cont.duration} </Card.Subtitle>
      
      <Table striped bordered hover>
        <h4>
          
        </h4>
      <thead>
        <tr>
          
          <th className='font-semibold text-pink-700'>Website</th>
          <th className='font-semibold text-pink-700'>Status</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
         
          
          <td><a href={cont.url}>HackerEarth</a></td>
          <td>{cont.status}</td>
        </tr>
       
      </tbody>
    </Table>
     
    </Card.Body>
  </Card>
  )
}

export default Crd
