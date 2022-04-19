import React, { useState } from 'react'
import categoryNames from "../../data/categoryNames.json"
import Category from '../Category';
import Gps from '../Gps';
import NavBar from '../NavBar';
import SearchBar from '../SearchBar';
import '../../test.css';
import Header from "../Header";
import Footer from "../Footer";


const Main = (props) => {
  const {allData} = props;
  const [categoryString, setCategoryString] = useState(categoryNames);
  //  const [home ,setHome] = useState();

  // const myClick = async () => {
  //   let response = await fetch("/home");
  //   let res = await response.json();
  //   console.log(response);
  //   console.log(res);
  //   setHome(res.Home);
  // };

  return (
    <div className="main">
      <Header />
      {/* <NavBar/> */}
      <SearchBar/>
      <Category categories={categoryString}/>
      <Footer/>
  </div>
  )
};

export default Main;
