import React, { useMemo, useState } from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const Gps = (props) => {
  const { businessData, categoryString } = props;
  const [popupInfo, setPopupInfo] = useState();
  const [viewport, setViewPort] = useState({
    latitude: 51.067625,
    longitude: -114.0926977,
    zoom: 10,
  });

  // console.log("data", businessData);
  // console.log("token", process.env.REACT_APP_MAPBOX_TOKEN)

  const pins = useMemo(() => {
    // businessData&&businessData.filter((e,index)=>console.log("null",e.latitude==null))
    return (
      businessData &&
      businessData.map((business, index) => {
        console.log(business);
        return (
          <Marker
            key={`marker-${index}`}
            longitude={business.longitude}
            latitude={business.latitude}
            anchor="bottom"
            onclick={(e) => {
              e.originalEvent.stopPropagation();
              setPopupInfo(business);
            }}
          >
            {categoryString&&categoryString.map(
              (cate)=>{
                // console.log("here")
                if(business.headCategory === cate.headCategory){
                  // console.log("businesscategory",business.headCategory)
                  // console.log("category",cate.headCategory)
                  return <i className={`${cate.headCategory} ${cate.icon}`}></i>;
              }} 
            )}
            {/* <i className="fa-solid fa-location-dot"></i> */}
          </Marker>
        );
      })
    );
  }, [businessData]);

  return (
    <div className="Mapbox">
      <Map
        {...viewport}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        // style={{width: 600,height: 400}}
        mapStyle="mapbox://styles/inyoung1714/cl2i5e91p001n14nxvi27fq83"
        onMove={(evt) => setViewPort(evt.viewState)}
      >
        {pins}
      </Map>
    </div>
  );
};

export default Gps;
