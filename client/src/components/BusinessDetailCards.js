import * as React from "react";
import StarRating from "./GpsComponents/StarRating"

export const BusinessDetailCards = (props) => {
 // console.log("props", props);
  const data = props.businessdata;
 // console.log("what is data?", data);


  return (
    <div className="center" >
      <img src={data && data.imgUrl} alt="" height={350}
          width={500} />
      <div style={{display:"flex",justifyContent:"center",gap:5}}> Customer Saticfaction Rating: {data && data.rating}<StarRating popupInfo={data} /></div>
      {/* <div>Business Address: <button onClick= {data && data.address}>Click Me</button></div> */}
      <div>Phone Number: {data && data.phoneNumber}</div>
      <div>City Quadrant: {data && data.quadrant}</div>
      {data&&data.website&&
        <div>Website: <a href={"http://"+(data && data.website)}>{data && data.website}</a></div>
        }
      <div>Neighborhood: {data && data.neighbourhood}</div>
      <div>Business Status: {data && data.jobStatus}</div>
    </div>
  );

}
