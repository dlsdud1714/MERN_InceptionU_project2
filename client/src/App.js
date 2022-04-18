import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Pages/Main";
import List from "./components/Pages/List";
import BusinessDetails from "./components/Pages/BusinessDetails";
import { useEffect, useState } from "react";

function App() {
  const [businesses, setBusinesses] = useState([]);

  const getBusinesses = async () => {
    try{
    const response = await fetch("/data");
    const data = await response.json();
    return setBusinesses(data);
    }catch (ex){
      console.log(ex)
    }
  };

  useEffect( ()=>{getBusinesses()}, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Main allData={businesses}/>} />
        <Route path="/categories/:name" element={<List allData={businesses} />} />
        <Route
          path="/categories/:name/:business"
          element={<BusinessDetails />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
