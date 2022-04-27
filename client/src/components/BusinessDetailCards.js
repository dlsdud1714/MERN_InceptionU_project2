// import React from "react";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const BusinessDetailCards = (props) => {
  console.log("props", props);
  const data = props.businessdata;
  console.log("what is data?", data);

  // return (
  //       <Card sx={{ maxWidth: 345 }}>
  //         <CardMedia component="img" alt="" height="140" image={data.imgUrl} />
  //         <CardContent>
  //           <Typography variant="body2" color="text.secondary">
  //             <div> Customer Saticfaction Rating: {data && data.rating}</div>
  //             <div>Business Address: {data && data.address}</div>
  //             <div>Phone Number: {data && data.phoneNumber}</div>
  //             <div>City Quadrant: {data && data.quadrant}</div>
  //             <div>Website: {data && data.website}</div>
  //             <div>Neighborhood: {data && data.neighborhood}</div>
  //             <div>Business Status: {data && data.jobStatus}</div>
  //           </Typography>
  //         </CardContent>
  //         <CardActions>
  //           <Button size="small">Share</Button>
  //           <Button size="small">Learn More</Button>
  //         </CardActions>
  //       </Card>
  //     );
  //   }

  return (
    <div>
      <img src={data && data.imgUrl} alt="" />
      <div> Customer Saticfaction Rating: {data && data.rating}</div>
      <div>Business Address: {data && data.address}</div>
      <div>Phone Number: {data && data.phoneNumber}</div>
      <div>City Quadrant: {data && data.quadrant}</div>
      <div>Website: {data && data.website}</div>
      <div>Neighborhood: {data && data.neighborhood}</div>
      <div>Business Status: {data && data.jobStatus}</div>
    </div>
  );

  // export default function ImgMediaCard() {
  //   return (
  //     <Card sx={{ maxWidth: 345 }}>
  //       <CardMedia component="img" alt="" height="140" image={data.imgUrl} />
  //       <CardContent>
  //         <Typography variant="body2" color="text.secondary">
  //           <div> Customer Saticfaction Rating: {data && data.rating}</div>
  //           <div>Business Address: {data && data.address}</div>
  //           <div>Phone Number: {data && data.phoneNumber}</div>
  //           <div>City Quadrant: {data && data.quadrant}</div>
  //           <div>Website: {data && data.website}</div>
  //           <div>Neighborhood: {data && data.neighborhood}</div>
  //           <div>Business Status: {data && data.jobStatus}</div>
  //         </Typography>
  //       </CardContent>
  //       <CardActions>
  //         <Button size="small">Share</Button>
  //         <Button size="small">Learn More</Button>
  //       </CardActions>
  //     </Card>
  //   );
  // }
}