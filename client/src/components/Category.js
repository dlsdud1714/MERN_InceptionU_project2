import React from "react";
import { useNavigate } from "react-router-dom";

const Category = (props) => {
  const { categories } = props;
  const navigate = useNavigate();



  const listGenerator = () => {
    return categories.map((category, index) => {
      return (
        <button className="category" onClick={()=>navigate(`/categories/${category.headCategory}`)} key={`category ${index}`}>
          <i className={category.icon}></i>
          <span>{category.name}</span>
        </button>
      );
    });
  };

  return (
    <div className="categories">
      <div>Category</div>
      <div className="categoryContainer">
      {listGenerator()}
      </div>
    </div>
  );
};

export default Category;
