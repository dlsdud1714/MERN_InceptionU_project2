import React from "react";
import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const BusinessCard = (props) => {
  const filterData = props.Data;
  console.log(filterData);

  return (
    <div className="card">
      <Container className='p-4'>
        <Row xs={1} md={2} lg={4} className="g-4">
          <Col>
            {filterData &&
              filterData.map((data) => {
                return (
                  <Card>
                    <Card.Img
                      variant="top"
                      
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
                );
              })}
          </Col>
        </Row>
      </Container>

      {/* <img src={filterData&&filterData[0].imgUrl} referrerpolicy="no-referrer" /> */}
    </div>
  );
};

export default BusinessCard;
