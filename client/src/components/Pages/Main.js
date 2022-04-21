import React, { useState } from "react";
import categoryNames from "../../data/categoryNames.json";
import Category from "../Category";
import SearchBar from "../SearchBar";
import "../../test.css";
import NavBar from "../NavBar";
import Header from "../Header";
import Footer from "../Footer";
import BusinessCard from "../BusinessCard";
import { Route, Routes } from "react-router-dom";

const Main = (props) => {
  const {businessData} = props;
  const [categoryString, setCategoryString] = useState(categoryNames);
  console.log("Main business data is:", businessData)
  return (
    <div className="main">
      <Header />
      {/* <NavBar/> */}
      <SearchBar businessData={businessData}/>
      <Category categories={categoryString}/>
      <Footer/>
  </div>
  )
};

export default Main;
