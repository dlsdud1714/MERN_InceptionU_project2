import React, { useState } from "react";
import categoryNames from "../../data/categoryNames.json";
import Category from "../Category";
import "../../test.css";
import Header from "../Header";
import Footer from "../Footer";

const Main = (props) => {
  const {businessData} = props;
  const [categoryString, setCategoryString] = useState(categoryNames);
  console.log("Main business data is:", businessData)
  return (
    <div className="main">
      <Header businessData={businessData}/>
      {/* <NavBar/> */}
      {/* <SearchBar businessData={businessData}/> */}
      <Category categories={categoryString}/>
      <Footer/>
  </div>
  )
};

export default Main;
