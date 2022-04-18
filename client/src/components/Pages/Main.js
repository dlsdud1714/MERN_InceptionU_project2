import React, { useState } from "react";
import categoryNames from "../../data/categoryNames.json"
import Category from "../Category";
import SearchBar from "../SearchBar";
import '../../test.css'
import NavBar from "../NavBar";

const Main = () => {
  const [categoryString, setCategoryString] = useState(categoryNames);

  return (
    <div>
      <NavBar/>
      <SearchBar/>
      <Category categories={categoryString}/>
  </div>
  )
};

export default Main;
