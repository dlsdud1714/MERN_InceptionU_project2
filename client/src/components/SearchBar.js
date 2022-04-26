import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import { FixedSizeList, ListChildComponentProps } from 'react-window';

const SearchBarDropDown = (props) => {
  const val = props.val;
  let navigate = useNavigate()
  return (
    <Box sx={{ width: '100%', height: 50, maxWidth: 360, bgcolor: 'background.paper', border: '1px solid grey' }}>
      <FixedSizeList
        height={400}
        width={360}
        itemSize={46}
        itemCount={200}
        overscanCount={5}
      >
    {() => <ListItem component="div" disablePadding>
      <ListItemButton onClick={() => navigate(`/business/${val._id}`) }>
        <ListItemText primary={val.title}/>
      </ListItemButton>
    </ListItem>}
    </FixedSizeList>
    </Box>
  );
};

    // <div className="search-bar-dropdown">
    //   <div class="list-group">
    //     <a href={`/business/${val._id}`} className="list-group-item list-group-item-action">
    //         {val.title}
    //     </a>
    //   </div>
    // </div>

const SearchBar = (props) => {
  // console.log("props is:", props)
  // console.log("businessData is:", businessData)
  const [searchTerm, setSearchTerm] = useState("");
  const businessData = props.businessData;
  let mappedData = {}
  return (
    <div className="search-bar-dropdown">
      <input type="text" className="form-control" placeholder="Search" onChange={(event) => setSearchTerm(event.target.value)} />
      {businessData&&businessData.filter((value) => {
          if (searchTerm === "") return false;
          else if (
            value?.title?.toLowerCase().includes(searchTerm.toLowerCase())
            )
            return true;
          }).map((val) => {
            return (  
              <SearchBarDropDown val={val}/>
              );
            })}
          
    </div>
  );
};

            

// remove the .map and send back only the filtered array

// or

// push each val from .map into a new array

//<SearchBarDropDown val={val}/> 



// use .filter() to filter data
// then .map() to render the renaming entries in the array
// used useState to set and rerender the page when the searchTerm is updated

export default SearchBar;
