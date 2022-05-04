import React from "react";
import { Card } from "react-bootstrap";

const Aboutcard = (props) => {
  const card = props.Aboutcard;
  return (
  <Card>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Header>About YYCWhatsNearMe?</Card.Header>
    <Card.Body>
      <Card.Text>
      Welcome to YYCWhatsNearMe??(project 2)! Our website has been developed with Calgary
            local businesses in mind. We created a platform that is
            easily accessable to users and businesses. There are many features
            that help create an easy and positive user and business owner experience. Features
            include: GPS with locations near user, user and business login pages,
            business catergories, and interective business posting section.
      </Card.Text>
    </Card.Body>
  </Card>
    /* <Card border="primary" style={{ width: "86rem" }}>
      
      <Card.Body>
        <Card.Text>
          <h6>
            
          </h6>
        </Card.Text>
      </Card.Body>
    </Card> */
  );
};



export default Aboutcard;
