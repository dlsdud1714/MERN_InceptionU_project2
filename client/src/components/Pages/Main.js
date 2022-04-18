import React, { useState } from 'react'
import categoryNames from "../../data/categoryNames.json"
import Category from '../Category';
import Gps from '../Gps';
import NavBar from '../NavBar';
import SearchBar from '../SearchBar';
import '../../test.css'

const Main = (props) => {
  const {allData} = props;
  console.log(allData);
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
    <NavBar />
    <SearchBar />
    <Category categories={categoryString}/>
    <Gps />
      {/* <button onClick={myClick}>button</button>
    <p>{home}</p> */}
    </div>
  );
}

export default Main;
