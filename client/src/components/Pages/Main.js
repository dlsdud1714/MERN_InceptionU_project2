import React, { useState } from "react";
import categoryNames from "../../data/categoryNames.json"
import Category from "../Category";
import SearchBar from "../SearchBar";
import '../../test.css'
import NavBar from "../NavBar";
import Header from "../Header";
import Footer from "../Footer";


const Main = () => {
  const [categoryString, setCategoryString] = useState(categoryNames);

  return (
    <div className="main">
      <Header />
      {/* <NavBar/> */}
      <SearchBar/>
      <Category categories={categoryString}/>
      <Footer/>
  </div>
  )
};

export default Main;
