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

  // auto.filter((val) => {
  //   if (val.title.toLowerCase().includes(searchTerm.toLowerCase)) return val;
  // });

  return (
    <div className="SearchBar">
      <input
        type="text"
        placeholder="Search"
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      {auto
        .filter((value) => {
          if (value.title.toLowerCase().includes(searchTerm.toLowerCase()))
            return value;
        })
        .map((val) => {
          return <div> {val.title} </div>;
        })}
    </div>
  );
};

export default SearchBar;
