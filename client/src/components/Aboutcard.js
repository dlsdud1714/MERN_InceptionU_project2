import React from "react";
import { Card } from "react-bootstrap";

const Aboutcard = (props) => {
  const card = props.Aboutcard;
  return (
  <Card>

    <Card.Header>About YYCWhatsNearMe?</Card.Header>    
    {/* // "https://moradmedia.com/get/files/image/galleries/Web_Design_Firms_Calgary_Inglewood_header-0001.jpg?1400x1400"  */}
       
    <Card.Body>
      <Card.Text>
      Welcome to YYCWhatsNearMe??(project 2)! Our website has been developed with Calgary
      local businesses in mind. We created a platform that is
      easily accessable to users and businesses. There are many features
      that help create an easy and positive user and business owner experience. Features
      include: GPS with locations near user, user and business login pages,
      business catergories, and interective business posting section.
      
      </Card.Text>
    <Card.Img variant="bottom"  style={{width: "75%"}} src="https://th.bing.com/th/id/OIP.ukyHlTJj4ZEFZ3b9yr4ZbwHaDk?pid=ImgDet&rs=1" />

    </Card.Body>
  </Card>

  );
};



export default Aboutcard;
