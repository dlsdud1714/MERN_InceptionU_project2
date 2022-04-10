import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

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
      <button onClick={myClick}>botton</button>
    <p>{home}</p>
    </div>
  );
}

export default App;
