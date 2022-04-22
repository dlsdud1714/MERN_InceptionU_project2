import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';
import BusinessCard from "../BusinessCard";
import Footer from "../Footer"



const List = (props) => {
  const businessData = props.Data
  const {category} = useParams()
  const [filteredData, setFilteredData] = useState()
  const filterData = () => {
  if (businessData == null)
    return 
  const categoryData = businessData.filter((Data)=>Data.headCategory === category)
  setFilteredData(categoryData)
}
useEffect(()=>{filterData()}, [businessData]) // eslint-disable-line react-hooks/exhaustive-deps
  console.log(filteredData)
  return (
    <div>
      {/* <Header /> */}
      <BusinessCard Data={filteredData} />
      <Footer/>
    </div>
  );
};





export default List;
