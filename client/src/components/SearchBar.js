import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import { FixedSizeList, ListChildComponentProps } from 'react-window';

const SearchBarDropDown = (props) => {
  const mappedData = props.mappedData;
  const searchTerm = props.searchTerm;
  const setSearchTerm = props.setSearchTerm;
  const navigate = useNavigate()
  // const [dropboxOpen, ]

  
  return (
    <Box sx={{ width: '100%', height: 150, maxWidth: 360, bgcolor: 'white', mt: 1}}>
      <FixedSizeList
        height={150}
        width={360}
        itemSize={2}
        itemCount={2}
        overscanCount={5}
        >
    {() =>mappedData.map((item, key)=> {
        function onClick() {
            navigate(`/business/${item._id}`)
            console.log('clicked')
            console.log(item._id)
            setSearchTerm(()=>"")
            console.log("serchterm",searchTerm)
        }
      return <ListItem component="div" disablePadding>
      <ListItemButton onClick={onClick}>
        <ListItemText primary={item.title}/>
      </ListItemButton>
    </ListItem>}
    )}
    </FixedSizeList>
    </Box>
  );
};


const SearchBar = (props) => {
  // console.log("props is:", props)
  // console.log("businessData is:", businessData)
  const [searchTerm, setSearchTerm] = useState("");
  const [mappedData, setMappedData] = useState()
  const businessData = props.businessData;

  useEffect(()=>{
    // console.log('running')
    if (businessData){
    const newMapData = businessData.filter((value, key) => {
      if (searchTerm==="") return (false);
      else if (
        value?.title?.toLowerCase().includes(searchTerm.toLowerCase())
        )
        return true;
      })
      setMappedData(newMapData)}
  }, [searchTerm, businessData])

function onChange(event) {
    console.log("onChange", event.target.value)
    setSearchTerm(event.target.value)
  }
  // console.log(mappedData)
  return (
    <div className="search-bar-dropdown">
      <input type="text" className="form-control" value={searchTerm} placeholder="Search" onChange={onChange} /> 
          {(mappedData&&searchTerm)&&<SearchBarDropDown mappedData={mappedData} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>} 
    </div>
  );
};



// use .filter() to filter data
// then .map() to render the renaming entries in the array
// used useState to set and rerender the page when the searchTerm is updated

export default SearchBar;
