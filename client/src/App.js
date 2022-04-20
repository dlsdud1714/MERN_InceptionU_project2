import "./App.css";
import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import Category from "./components/Category";
import Gps from "./components/Gps";
import NavBar from "./components/NavBar";
import Main from "./components/Pages/Main";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import List from "./components/Pages/List";


function App() {
  const [businessData, setBusinessData]= useState();
  const getBusinessData= async () =>{
    try{
      const response = await fetch('/data');
      const businesses = await response.json()
      return setBusinessData(businesses);
    }catch(ex){
      console.log(ex);
    }
  }

  useEffect(()=>{getBusinessData()},[]);
  console.log(businessData)
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Main/>}/>
      <Route path="/categories/:category" element={<List Data={businessData}/>}/>
    </Routes>

    </BrowserRouter>
    // <div className="App">
      
    //   <Main businessData={businessData}/>
    
   
    // </div>
  );
}

export default App;
