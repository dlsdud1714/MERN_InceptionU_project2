import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';
import BusinessCard from "../BusinessCard";
// import { Grid, Typography, Card, Link } from "@mui/material"; 



const List = (props) => {
  const businessData = props.Data
  const {category} = useParams()
  const [filteredData, setFilteredData] = useState()
  const filterData = () => {
  if (businessData == null)
    return 
  const categoryData = businessData.filter((Data, key)=>Data.headCategory === category)
  setFilteredData(categoryData)
}
useEffect(()=>{filterData()}, [businessData]) // eslint-disable-line react-hooks/exhaustive-deps
  console.log(filteredData)
  return (
    <div> 
      <BusinessCard Data={filteredData} />
    </div>
  );
};





export default List;
