import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";
import Main from "./components/Pages/Main";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import List from "./components/Pages/List";
import BusinessDetails from "./components/Pages/BusinessDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import { AuthProvider } from "./components/contexts/AuthContext";


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
  //console.log(businessData)
  return (
    <BrowserRouter>
    <AuthProvider>
    <Header businessData={businessData}/>
    <Routes>
      <Route path="/" element={<Main businessData={businessData}/>}/>
      <Route path="/categories/:category" element={<List Data={businessData}/>}/>
      <Route path="/business/:businessId" element={<BusinessDetails Data={businessData}/>}/>
      <Route path="/signup" element={<Signup />}/>
    </Routes>
    <Footer/>
    </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
