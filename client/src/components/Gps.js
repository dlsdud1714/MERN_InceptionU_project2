import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Map, {
  GeolocateControl,
  Marker,
  NavigationControl,
  Popup,
  ScaleControl,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import ControlPanel from "./GpsComponents/ControlPanel";
import { CateFilterPanel } from "./GpsComponents/CateFilterPanel";
// import mapboxgl from "mapbox-gl";
// import GeocoderControl from "./GpsComponents/Geocoder";
// import Geocoder from "@mapbox/mapbox-gl-geocoder";
const Gps = (props) => {
  const { businessData, categoryString } = props;
  const geolocationRef = useCallback((ref) => {
    if (ref) {
      ref.trigger();
    }
  }, []);
  const [popupInfo, setPopupInfo] = useState();
  const [viewport, setViewPort] = useState({
    latitude: 51.067625,
    longitude: -114.0926977,
    zoom: 15,
  });
  const [category, setCategory] = useState(initialCategory);
  const mapRef = useRef();

  function initialCategory (){
    let categories = {}
    categoryString.map((cate)=>{
      categories[cate.headCategory]= true
    })
    return categories
  }

const updateCateSelected = useCallback(
  (name,value)=>{
    console.log("name and value", name, value)
    setCategory((pre)=>({...pre,[name]:value}))
  }
  ,[]
)

useEffect(()=>console.log("category", category),[category])

  const onSelectedStore = useCallback(({ longitude, latitude }) => {
    mapRef.current?.flyTo({ center: [longitude, latitude], duration: 2000 });
  }, []);
  
  const pins = useMemo(() => {
    const checkPlaceIsNew = (business) => {
      const userTimeStamp = new Date();
      const businessCreatedAt = new Date(business.jobCreated);
      const timeDif = userTimeStamp.getTime() - businessCreatedAt.getTime();
      const difInMon = timeDif / (1000 * 3600 * 24 * 30);
      if (difInMon < 12) {
        return "New";
      }
      if (difInMon > 180) {
        return "Traditional";
      }
    };


    return (
     
     businessData &&
      businessData.map((business, index) => {
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
            {categoryString &&
              categoryString.map((cate, index) => {
                if (business.headCategory === cate.headCategory) {
                  return (
                    <div
                      className="pin--container"
                      key={`pin--container${cate}${index}`}
                    >
                      <i className={`${cate.headCategory} ${cate.icon}`}
                    key={`${cate.headCategory} ${cate.icon}`}></i>
                      {checkPlaceIsNew(business) && (
                        <div
                          key={`isNew${index}`}
                          className={`isNew ${
                            checkPlaceIsNew(business) === "New" && "new"
                          }`}
                        >
                          {checkPlaceIsNew(business)}
                        </div>
                      )}
                    </div>
                  );
                }
              })}
          </Marker>
         
        );
      })
    );
  }, [businessData]);

  return (
    <div className="Mapbox">
       <p>{category&&category.key}</p>
      <Map
        ref={mapRef}
        {...viewport}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/inyoung1714/cl2i5e91p001n14nxvi27fq83"
        onMove={(evt) => setViewPort(evt.viewState)}
      >
        <GeolocateControl ref={geolocationRef} trackUserLocation={true} />
        <NavigationControl />
        <ScaleControl />
        {/* <GeocoderControl mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        position="top-left" data={businessData}/> 
        */}
        {pins}

        <div className="popup">
          {popupInfo && (
            <Popup
              anchor="top"
              longitude={Number(popupInfo.longitude)}
              latitude={Number(popupInfo.latitude)}
              onClose={() => setPopupInfo(null)}
              style={{ height: 400, display: "flex" }}
            >
              <div className="popup--tag">
                <img
                  className="place--img"
                  src={`${popupInfo.imgUrl}`}
                  alt=""
                />
                <div className="place--title">{popupInfo.title}</div>
                <div className="place--google">
                  <i className="fa-solid fa-map-location-dot"></i>
                  <a href={`${popupInfo.placeUrl}`}>google map</a>
                </div>
              </div>
            </Popup>
          )}
        </div>
        <CateFilterPanel settings={category} onChange={updateCateSelected}/>
      </Map>
      <ControlPanel
        data={popupInfo}
        onSelectedStore={onSelectedStore}
        businessData={businessData}
        categoryString={categoryString}
        setPopupInfo={setPopupInfo}
     
      />
       
          
        
    </div>
  );
};

export default Gps;
