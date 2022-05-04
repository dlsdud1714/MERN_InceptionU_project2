import * as React from "react";


export const BusinessDetailCards = (props) => {
 // console.log("props", props);
  const data = props.businessdata;
 // console.log("what is data?", data);


  return (
    <div className="center" >
      <img src={data && data.imgUrl} alt="" height={350}
          width={500} />
      <div> Customer Saticfaction Rating: {data && data.rating}</div>
      {/* <div>Business Address: <button onClick= {data && data.address}>Click Me</button></div> */}
      <div>Phone Number: {data && data.phoneNumber}</div>
      <div>City Quadrant: {data && data.quadrant}</div>
      {data&&data.website&&
        <div>Website: <a href={"http://"+(data && data.website)}>{data && data.website}</a></div>
        }
      <div>Neighborhood: {data && data.neighborhood}</div>
      <div>Business Status: {data && data.jobStatus}</div>
    </div>
  );

}
