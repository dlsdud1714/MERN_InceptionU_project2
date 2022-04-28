import React, { useEffect, useMemo, useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
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
useEffect(()=>console.log("pupupinfo", popupInfo),[popupInfo]) 
  const pins = useMemo(() => {
    // businessData&&businessData.filter((e,index)=>console.log("null",e.latitude==null))

const checkPlaceIsNew = (business) =>{
  const userTimeStamp = new Date()
  const businessCreatedAt = new Date(business.jobCreated)
  const timeDif= userTimeStamp.getTime()-businessCreatedAt.getTime();
  const difInMon = timeDif/(1000*3600*24*30);
  // console.log("job creacted",businessCreatedAt.getTime())
  // console.log("timedif", difInMon)
  if(difInMon<12){
    return "New"
  }if(difInMon>120){
    return "Traditional"
  }
}

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
            onClick={(e) => {
              e.originalEvent.stopPropagation();
              setPopupInfo(business);
            }}
          >
            {categoryString&&categoryString.map(
              (cate)=>{
                 console.log("here", checkPlaceIsNew(business));
                if(business.headCategory === cate.headCategory){
                  // console.log("businesscategory",business.headCategory)
                  // console.log("category",cate.headCategory)
                  return (<div className="pin--container">
                    <i className={`${cate.headCategory} ${cate.icon}`}></i>
                    {checkPlaceIsNew(business)&&<div className={`isNew ${checkPlaceIsNew(business)==="New"&&"new"}`}>{checkPlaceIsNew(business)}</div>}
                    </div>)
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
         style={{width: '80%',height: '100%'}}
        mapStyle="mapbox://styles/inyoung1714/cl2i5e91p001n14nxvi27fq83"
        onMove={(evt) => setViewPort(evt.viewState)}
      >
        {pins}
        <div className="popup">
          {popupInfo&&(
            <Popup
              anchor="top"
              longitude={Number(popupInfo.longitude)}
              latitude={Number(popupInfo.latitude)}
              onClose={()=> setPopupInfo(null)}
              style={{height: 400, display:'flex'}}
              >
                <div className="popup--tag">
                  <img className="place--img" src={`${popupInfo.imgUrl}`} alt="" />
                  <div className="place--title">{popupInfo.title}</div>
                  <div className="place--google"><i className="fa-solid fa-map-location-dot"></i><a href={`${popupInfo.placeUrl}`}>google map</a></div>
                  
                </div>
              </Popup>
          )}
        </div>
      </Map>
    </div>
  );
};

export default Gps;
