import React from "react";
import categories from "../data/categoryNames.json";

const Category = () => {
  console.log(categories);

  return (
    <div>
      <h1>Category:</h1>
      {categories.map((item)=>{return <h1>{item.name}</h1>})}
      
    </div>
  );
};

export default Category;
