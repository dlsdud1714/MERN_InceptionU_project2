import React, { useState } from 'react'
import Category from '../Category';
import Gps from '../Gps';
import NavBar from '../NavBar';
import SearchBar from '../SearchBar';

const Main = (props) => {
  const {allData} = props
  console.log(allData)
   const [home ,setHome] = useState();

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
    <Category />
    <Gps />
      {/* <button onClick={myClick}>button</button>
    <p>{home}</p> */}
    </div>
  );
}

export default Main