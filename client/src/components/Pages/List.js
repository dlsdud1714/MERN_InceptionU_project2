import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';
import BusinessCard from "../BusinessCard";
import CategoryNames from "../../data/categoryNames.json"
// import { Grid, Typography, Card, Link } from "@mui/material"; 



const List = (props) => {
  const businessData = props.Data
  const CategoryArray = CategoryNames
  const {category} = useParams()
  const [filteredData, setFilteredData] = useState()
  const filterData = () => {
  if (businessData == null)
    return 
  const categoryData = businessData.filter((Data, key)=>Data.headCategory === category)
  setFilteredData(categoryData)
}
useEffect(()=>{filterData()}, [businessData]) // eslint-disable-line react-hooks/exhaustive-deps
  console.log(filteredData);

const findCategoryName=()=>{
  const categoryString = filteredData&&CategoryArray.find(e=>e.headCategory===category)
  console.log(categoryString)
  return <div>{categoryString&&categoryString.name}</div>
}
findCategoryName()
  return (
    <div className="lists"> 
      <div className="title">Category: {findCategoryName()}</div>
      <BusinessCard Data={filteredData} />
    </div>
  );
};





export default List;
