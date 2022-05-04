import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
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
import GeocoderControl from "./GpsComponents/Geocoder";
import StarRating from "./GpsComponents/StarRating";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const Gps = (props) => {
  const { businessData, categoryString } = props;
  const navigate = useNavigate();
  const geolocationRef = useCallback((ref) => {
    if (ref) {
      console.log("ref", ref);
      ref.trigger();
    }
  }
  , []);
  const [popupInfo, setPopupInfo] = useState();
  const [viewport, setViewPort] = useState({
    latitude: 51.067625,
    longitude: -114.0926977,
    zoom: 15,
  });
  const [category, setCategory] = useState(initialCategory);
  const [listsInArea, setListInArea] = useState([]);
  const mapRef = useRef();

  function initialCategory() {
    let categories = {};
    // eslint-disable-next-line array-callback-return
    categoryString.map((cate) => {
      categories[cate.headCategory] = true;
    });
    return categories;
  }

  const updateCateSelected = useCallback((name, value) => {
    // console.log("name and value", name, value);
    setCategory((pre) => ({ ...pre, [name]: value }));
  }, []);

  const onSelectedStore = useCallback(({ longitude, latitude }) => {
    mapRef.current?.flyTo({ center: [longitude, latitude*1-0.003], zoom:14, duration: 2000 });
  }, []);

  const viewArea = mapRef.current?.getBounds();
  const findServiceInArea = () => {
    const maxLat = viewArea._ne.lat;
    const maxLong = viewArea._ne.lng;
    const minLat = viewArea._sw.lat;
    const minLong = viewArea._sw.lng;

    const filterLists = () => {
      let stores = [];
      businessData &&
        // eslint-disable-next-line array-callback-return
        businessData.map((store, index) => {
          if (category[store.headCategory]) {
            if (
              store.latitude * 1 < maxLat &&
              store.latitude * 1 > minLat &&
              store.longitude * 1 < maxLong &&
              store.longitude * 1 > minLong
            ) {
              stores = [...stores, store];
            }
            return setListInArea(stores);
          }
        });
    };
    filterLists();
  };
  useEffect(() => {
    viewArea && findServiceInArea();
  }, [viewport, category]);


  const pins = useMemo(() => {
    return (
      businessData &&
      // eslint-disable-next-line array-callback-return
      businessData.map((business, index) => {
        if (category[business.headCategory]) {
          return (
            <Marker
              key={`marker-${index}`}
              longitude={business.longitude}
              latitude={business.latitude}
              anchor="bottom"
              onClick={(e) => {
                e.originalEvent.stopPropagation();
                setPopupInfo(business);
                onSelectedStore(business);
              }}
            >
              {categoryString &&
                // eslint-disable-next-line array-callback-return
                categoryString.map((cate, index) => {
                  if (business.headCategory === cate.headCategory) {
                    return (
                      <div
                        className="pin--container"
                        key={`pin--container${cate}${index}`}
                      >
                        <i
                          className={`${cate.headCategory} ${cate.icon}`}
                          key={`${cate.headCategory} ${cate.icon}`}
                        ></i>
                      </div>
                    );
                  }
                })}
            </Marker>
          );
        }
      })
    );
  }, [businessData, category, categoryString]);

  return (
    <div className="Mapbox">
      
      <Map
        ref={mapRef}
        {...viewport}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        style={{ width: "80%", height: "100%" }}
        mapStyle="mapbox://styles/inyoung1714/cl2i5e91p001n14nxvi27fq83"
        onMove={(evt) => setViewPort(evt.viewState)}
      >
        <GeolocateControl ref={geolocationRef} trackUserLocation={true} />
        <NavigationControl />
        <ScaleControl />
        {/* <GeocoderControl
          mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          position="top-right"
          data={businessData}
        /> */}

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
                <div className="plcae--neighborhood">
                  in {popupInfo.neighbourhood}
                </div>
                <div className="plcae--address">
                  {popupInfo.address.replace(/['"]+/g, "")}
                </div>
                <div className="place--google">
                  <i className="fa-solid fa-map-location-dot"></i>
                  <a href={`${popupInfo.placeUrl}`}>google map</a>
                </div>
                <StarRating popupInfo={popupInfo} />
                <Button onClick={() => navigate(`/business/${popupInfo._id}`)}>
                  More info
                </Button>
              </div>
            </Popup>
          )}
        </div>
        <CateFilterPanel settings={category} onChange={updateCateSelected} />
      </Map>
      <ControlPanel
        data={popupInfo}
        onSelectedStore={onSelectedStore}
        businessData={listsInArea}
        categoryString={categoryString}
        setPopupInfo={setPopupInfo}
      />
    </div>
  );
};

export default Gps;
