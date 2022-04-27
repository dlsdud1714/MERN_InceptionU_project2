import React, { useEffect, useState } from 'react'
import BusinessAd from '../BusinessAd'
import { useParams } from 'react-router-dom';
import { BusinessDetailCards } from '../BusinessDetailCards';

const BusinessDetails = (props) => {
  const businessData = props.Data;
  const businessId = useParams().businessId;
  const [selectedBusiness, setSelectedBusiness] = useState();
console.log("selectedBusiness", selectedBusiness)
 const filterBusinesses = () => {
    const filtered = businessData.filter((data) => data._id === businessId);
    setSelectedBusiness(()=>filtered[0]);
  }

  useEffect(()=>{
    businessData&&filterBusinesses();
  }, [businessData])// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
        <BusinessDetailCards businessdata={selectedBusiness} />
        <BusinessAd businessData={selectedBusiness}/>
       
    </div>
  )
}

export default BusinessDetails