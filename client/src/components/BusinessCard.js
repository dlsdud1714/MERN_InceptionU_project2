import React from "react";
import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const BusinessCard = (props) => {
  const filterData = props.Data;
  console.log(filterData);

  return (
    <div  className="card">
      <Container className='p-4'>
        <Row xs={1} md={2} lg={4} className="g-4">
            {filterData &&
              filterData.map((data, key) => {
                return (
                  <Col key={`col--${key}`}>
                  <Card key={`card--${key}`}>
                    <Card.Img
                      variant="top"
                      height={180}
                      src={data.imgUrl}
                      referrerpolicy="no-referrer"
                      key={`img--${key}`}
                    />
                    <Card.Body key={`CardBody--${key}`}>
                      <a href={`/business/${data._id}`} className="card-link" key={`a--${key}`}>
                        {data.title}
                      </a>
                      <Card.Text key={`cardText--${key}`}>{data.quadrant}</Card.Text>
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
