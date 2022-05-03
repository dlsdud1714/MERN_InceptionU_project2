import React from 'react';
import { MDBCard, MDBCardBody, MDBCardText, MDBCardImage } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBCard style={{ width: '18rem' }}>
      <MDBCardImage src='https://cdn.pixabay.com/photo/2020/05/30/04/52/calgary-5237661_960_720.jpg' alt='...' position='top' />
      <MDBCardBody>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
  );
}

// import React from "react";
// // import { useParams } from "react-router-dom";
// // import Aboutcard from "../Aboutcard";

// const About = () => {
//   return <div>About</div>;
// };

// const Aboutcard = () => {
//   console.log(about);
//   return (
//     <>
//       <Card>
//         <Card.Img variant="top" src="holder.js/100px180" />
//         <Card.Body>
//           <Card.Text>
//             "Welcome to our project 2! Our website was developed with Calgary
//             local businesses in mind. We wanted to create a platform that is
//             easily accessable to users and businesses. There are many features
//             that help create an easy and positive user experience. Features
//             include: GPS with locationsnear user, user and business login pages,
//             business catergories, and interective business posting section. "
//           </Card.Text>
//         </Card.Body>
//       </Card>
//     </>
//   );
// };

// const aboutUs = () => {
//   return (
//     <p>
//       "Welcome to our project 2! Our website was developed with Calgary local businesses in mind.
//       We wanted to create a platform that is easily accessable to users and
//       businesses. There are many features that help create an easy and positive
//       user experience. ")
//     </p>
//   );
// };

// export default About;
// Aboutcard;
