import React, { useState } from "react";
import categoryNames from "../../data/categoryNames.json";
import Category from "../Category";
import "../../test.css";
import Background from "../Background";
import Gps from "../Gps"
import About from "./About";

const Main = (props) => {
  const {businessData} = props;
  const categoryString = categoryNames;
  // console.log("Main business data is:", businessData)
  return (
    <div className="main">
      <Background/>
      {/* <About/> */}
      {/* <Header businessData={businessData}/> */}
      {/* <NavBar/> */}
      {/* <SearchBar businessData={businessData}/> */}
      <Category categories={categoryString}/>
      {/* <div className="GPS--header">What's near me?</div> */}
    <Gps businessData={businessData} categoryString={categoryString}/>
  </div>
  )
};

export default Main;
