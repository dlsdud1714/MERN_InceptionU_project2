import React from "react";
import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const BusinessCard = (props) => {
  const filterData = props.Data;
  console.log(filterData);

//   <Row xs={1} md={2} className="g-4">
//   {Array.from({ length: 4 }).map((_, idx) => (
//     <Col>
//       <Card>
//         <Card.Img variant="top" src="holder.js/100px160" />
//         <Card.Body>
//           <Card.Title>Card title</Card.Title>
//           <Card.Text>
//             This is a longer card with supporting text below as a natural
//             lead-in to additional content. This content is a little bit longer.
//           </Card.Text>
//         </Card.Body>
//       </Card>
//     </Col>
//   ))}
// </Row>

  return (
    <div className="card">
      <Container className='p-4'>
        <Row xs={1} md={2} lg={4} className="g-4">
            {filterData &&
              filterData.map((data, key) => {
                return (
                  <Col>
                  <Card>
                    <Card.Img
                      variant="top"
                      height={180}
                      src={data.imgUrl}
                      referrerpolicy="no-referrer"
                    />
                    <Card.Body>
                      <a href={`/business/${data._id}`} className="card-link">
                        {data.title}
                      </a>
                      <Card.Text>{data.quadrant}</Card.Text>
                    </Card.Body>
                  </Card>
                    </Col>
                );
              })}
        </Row>
      </Container>

      {/* <img src={filterData&&filterData[0].imgUrl} referrerpolicy="no-referrer" /> */}
    </div>
  );
};



export default BusinessCard;
