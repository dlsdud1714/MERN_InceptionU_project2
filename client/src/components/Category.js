import React from "react";

const Category = (props) => {
  const { categories } = props;

  const listGenerator = () => {
    return categories.map((category, index) => {
      return (
        <button className="category" key={`category ${index}`}>
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
