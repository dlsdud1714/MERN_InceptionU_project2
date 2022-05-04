import React from "react";

const Aboutcard = (props) => {
    const card = props.Aboutcard;
    console.log(about);
    return(
    <Card border="primary" style={{ width: '18rem' }}>
        <Card.Header>About YYCWhatsNearMe?</Card.Header>
        <Card.Body>
          <Card.Text>
            <h6>{}</h6>
            <h6>{}</h6>
            <h6>{}</h6>
            <h6>{}</h6>
            <h6>{}</h6>
            <h6>{}</h6>
            <h6>{}</h6>
            <h6>{}</h6>
            <h6>{}</h6>
          </Card.Text>
        </Card.Body>
      </Card>
    )};

export default Aboutcard; 