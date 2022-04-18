import React, { useState } from "react";
import categoryNames from "../../data/categoryNames.json"
import Category from "../Category";
import SearchBar from "../SearchBar";
import '../../test.css'

const Main = () => {
  const [categoryString, setCategoryString] = useState(categoryNames);

  return (
    <div>Main
      <SearchBar/>
      <Category categories={categoryString}/>
  </div>
  )
};

export default Main;
