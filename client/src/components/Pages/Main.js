import React, { useState } from "react";
import categoryNames from "../../data/categoryNames.json";
import Category from "../Category";
import SearchBar from "../SearchBar";
import "../../test.css";
import NavBar from "../NavBar";
import Header from "../Header";
import Footer from "../Footer";
import BusinessCard from "../BusinessCard";
import { Route, Routes } from "react-router-dom";

const Main = () => {
  const [categoryString, setCategoryString] = useState(categoryNames);

  return (
    <div className="main">
      <Header />
        {/* <NavBar/> */}
        <SearchBar />
        <Category categories={categoryString} />
        <BusinessCard />   
      /* Added to see on main page until routes are completed, to see styling */
      <Footer />
    </div>
  );
};

export default Main;
