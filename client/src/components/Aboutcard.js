import React from "react";
import { Card } from "react-bootstrap";

const Aboutcard = (props) => {
  const card = props.Aboutcard;
  return (
  <Card>
    <Card.Header>About YYCWhatsNearMe?</Card.Header>
    <Card.Body>
      <Card.Text>
      Welcome to YYCWhatsNearMe??(project 2)! Our website has been developed with Calgary
            local businesses in mind. We created a platform that is
            easily accessable to users and businesses. There are many features
            that help create an easy and positive user and business owner experience. Features
            include: GPS with locations near user, user and business login pages,
            business catergories, and interective business posting section.
        <Card.Img variant="bottom" src="https://th.bing.com/th/id/OIP.vhyPTcL1HL_J6MoWo-DpXAHaEK?w=305&h=180&c=7&r=0&o=5&pid=1.7"/>

      </Card.Text>
    </Card.Body>
  </Card>

  );
};



export default Aboutcard;
