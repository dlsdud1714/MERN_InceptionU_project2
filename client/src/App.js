import "./App.css";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import Category from "./components/Category";
import Gps from "./components/Gps";
import NavBar from "./components/NavBar";
import Main from "./components/Pages/Main";

function App() {

  const [home ,setHome] = useState();

  const myClick = async () => {
    let response = await fetch("/home");
    let res = await response.json();
    console.log(response);
    console.log(res);
    setHome(res.Home);
  };

  return (
    <div className="App">
      <Main/>
    {/* <NavBar />
    <SearchBar /> }
    {/* <Category /> */}
    {/* <Gps /> */}
      {/* <button onClick={myClick}>button</button>
    <p>{home}</p> */}
    </div>
  );
}

export default App;
