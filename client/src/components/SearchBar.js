
import { Button } from "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { useState } from "react";
import {Link} from 'react-router-dom';


const SearchBar = (props) => {
  // console.log("props is:", props)
  // console.log("businessData is:", businessData)
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="SearchBar">
      <input
        type="text"
        placeholder="Search"
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      {props.businessData&&props.businessData
        .filter((value) => {
          if (searchTerm == "")
            return false
          else if (value?.title?.toLowerCase().includes(searchTerm.toLowerCase()))
            return true
        })
        .map((val) => {
          return <Link to= {`/business/${val._id}`}> 
                    <ul class = "list-group">
                      <a href={`/business/${val._id}`}> {val.title}</a>
                    </ul> 
                 </Link>;
        })}
    </div>
  );
};

// use .filter() to filter data
// then .map() to render the renaming entries in the array
// used useState to set and rerender the page when the searchTerm is updated

export default SearchBar;
