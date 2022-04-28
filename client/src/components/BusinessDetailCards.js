// import React from "react";
import * as React from "react";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";

export const BusinessDetailCards = (props) => {
  console.log("props", props);
  const data = props.businessdata;
  console.log("what is data?", data);



  return (
    <div class="center" >
      <img src={data && data.imgUrl} alt="" height={350}
          width={500}/>
      <div> Customer Saticfaction Rating: {data && data.rating}</div>
      <div>Business Address: <button onclick= {data && data.address}>Click Me</button></div>
      <div>Phone Number: {data && data.phoneNumber}</div>
      <div>City Quadrant: {data && data.quadrant}</div>
      <div>Website: {data && data.website}</div>
      <div>Neighborhood: {data && data.neighborhood}</div>
      <div>Business Status: {data && data.jobStatus}</div>
    </div>
  );

}
