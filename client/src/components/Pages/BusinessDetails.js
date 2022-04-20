import React, { useEffect, useState } from 'react'
import BusinessAdNote from '../BusinessAdNote'
import Header  from '../Header'
import { useParams } from 'react-router-dom'
import Details from '../Details'

const BusinessDetails = (props) => {
  const {allData} = props
  //console.log(allData)
  const businessId = useParams().business;
  const [selectedBusiness, setSelectedBusiness] = useState();

  const filterBusinesses = () => {
    const filtered = allData.filter((data) => data._id === businessId);
    setSelectedBusiness(()=>filtered[0]);
  }
  useEffect(()=>{
    filterBusinesses();
  }, [allData])// eslint-disable-line react-hooks/exhaustive-deps


  return (
    <div>
        <Header />
        <Details business={selectedBusiness}/>
        <BusinessAdNote business={selectedBusiness}/>
        </div>
  )
}

export default BusinessDetails