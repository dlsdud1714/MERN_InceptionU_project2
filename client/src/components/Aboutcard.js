import React from "react";

const Aboutcard = (props) => {
    const card = props.Aboutcard;
    console.log(about);
    return(
    <Card border="primary" style={{ width: '18rem' }}>
        <Card.Header>About YYCWhatsNearMe?</Card.Header>
        <Card.Body>
          <Card.Text>
            <h6>Welcome to our project 2! Our website was developed with Calgary
            local businesses in mind. We wanted to create a platform that is
            easily accessable to users and businesses. There are many features
            that help create an easy and positive user experience. Features
            include: GPS with locationsnear user, user and business login pages,
            business catergories, and interective business posting section.</h6>
          </Card.Text>
        </Card.Body>
      </Card>
    )};

export default Aboutcard; 