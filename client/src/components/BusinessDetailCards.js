import React  from 'react'

export const BusinessDetailCards = (props) => {
 console.log("props",props)
 const data = props.businessdata
 console.log("what is data?", data )
  
  return (
    <div>
      <img src= {data&&data.imgUrl} alt="" />
      <div> Customer Saticfaction Rating: {data&&data.rating}</div>
      <div>Business Address: {data&&data.address}</div>
      <div>Phone Number: {data&&data.phoneNumber}</div>
      <div>City Quadrant: {data&&data.quadrant}</div>
      <div>Website: {data&&data.website}</div>
      <div>Neighborhood: {data&&data.neighborhood}</div>
      <div>Business Status: {data&&data.jobStatus}</div>
    </div>
  )
}

