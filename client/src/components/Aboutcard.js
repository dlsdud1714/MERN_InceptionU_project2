import React from "react";

const Aboutcard = (props) => {
    const card = props.Aboutcard;
    console.log(about);
    return(
    <Card border="primary" style={{ width: '18rem' }}>
        <Card.Header>Dogs</Card.Header>
        <Card.Body>
          <Card.Text>
            <h6>{id.off_leash_area_id}</h6>
            <h6>{id.category}</h6>
            <h6>{id.status}</h6>
            <h6>{id.description}</h6>
            <h6>{id.parcel_location}</h6>
            <h6>{id.wam_parent_id}</h6>
            <h6>{id.steward}</h6>
            <h6>{id.maintained_by}</h6>
            <h6>{id.opened_dt}</h6>
          </Card.Text>
        </Card.Body>
      </Card>
    )};

export default Aboutcard; 