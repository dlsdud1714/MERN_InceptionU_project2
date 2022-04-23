import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useState } from "react";
import "../App.css";

const SearchBarDropDown = (props) => {
  const val = props.val;
  return (
    <div className="search-bar-dropdown">
      <div class="list-group">
        <a href={`/business/${val._id}`} className="list-group-item list-group-item-action">
            {val.title}
        </a>
      </div>
    </div>

  );
};

const SearchBar = (props) => {
  // console.log("props is:", props)
  // console.log("businessData is:", businessData)
  const [searchTerm, setSearchTerm] = useState("");
  const businessData = props.businessData;
  return (
    <div className="search-bar-dropdown">
      <input type="text" className="form-control" placeholder="Search" onChange={(event) => setSearchTerm(event.target.value)} />
      {businessData &&
        businessData
        .filter((value) => {
          if (searchTerm === "") return false;
          else if (
            value?.title?.toLowerCase().includes(searchTerm.toLowerCase())
            )
            return true;
          })
          .map((val) => {
            return (<SearchBarDropDown  val = {val}/>
            );
          })}
    </div>
  );
};

//import { Link } from "react-router-dom";
// <Link to={`/business/${val._id}`}>
//   <ul className="searchResult">
//     <a href={`/business/${val._id}`}> {val.title}</a>
//   </ul>
// </Link>
// use .filter() to filter data
// then .map() to render the renaming entries in the array
// used useState to set and rerender the page when the searchTerm is updated

export default SearchBar;
