import React, { useState } from 'react'
import ReactMapGL from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';


const Gps = (props) => {
  const {businessData, categoryString} = props;
  const [ viewport, setViewPort] = useState({
    latitude: 51.067625,
    longitude: -114.0926977,
    width: "90vw",
    height: "40vh",
    zoom: 10
  })
  console.log("data", businessData);
console.log("token", process.env.REACT_APP_MAPBOX_TOKEN)
  return (
    
      <div className='Mapbox'>
        <ReactMapGL
          {...viewport}
          mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          mapStyle="mapbox://styles/inyoung1714/cl2huww9x000515oaxtf97n6o"
          >
            </ReactMapGL>
      </div>
   
  )
}

export default Gps