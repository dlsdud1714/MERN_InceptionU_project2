import React from 'react'
import {Card, CardGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const BusinessCard = (props) => {
  const filterData = props.Data 
  console.log(filterData)
  
  return (
    <div>
      <CardGroup>
   {filterData&&filterData.map((data) =>
    {
      return(
      <Card>
      <Card.Img variant="top" src={data.imgUrl} referrerpolicy="no-referrer" />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>
          {data.quadrant
          }
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
    )
    })
     }
     </CardGroup>
  {/* <img src={filterData&&filterData[0].imgUrl} referrerpolicy="no-referrer" /> */}
  </div>
  
  )
}


export default BusinessCard