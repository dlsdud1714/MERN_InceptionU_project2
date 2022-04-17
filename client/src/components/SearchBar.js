import React from "react";
import { useState } from "react";

let auto = [
  {
    title: "Parkdale Auto Service",
  },
  {
    title: "Compu-Care Auto Service",
  },
  {
    title: "Northeast Automotive Service & Repair",
  },
];

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="SearchBar">
      <input
        type="text"
        placeholder="Search"
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      {auto
        .filter((value) => {
          if (searchTerm == "")
            return 
          else if (value.title.toLowerCase().includes(searchTerm.toLowerCase()))
            return value;
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
