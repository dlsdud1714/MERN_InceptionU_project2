
import React from "react";
import { useState } from "react";
import autoData from "../data/auto.json";



const SearchBar = (props) => {
  
  console.log(props.businessData)
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="SearchBar">
      <input
        type="text"
        placeholder="Search"
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      {props.businessData&&props.businessData
        .filter((value, index) => {
          if (searchTerm == "")
            return false
          else if (value?.title?.toLowerCase().includes(searchTerm.toLowerCase()))
            return true
        })
        .map((val) => {
          return <div> {val.title} </div>;
        })}
    </div>
  );
};

// use .filter() to filter data
// then .map() to render the renaming entries in the array
// used useState to set and rerender the page when the searchTerm is updated

export default SearchBar;
