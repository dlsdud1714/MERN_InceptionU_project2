
import React, { useState } from 'react'
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import { useControl } from 'react-map-gl';

const GeocoderControl = (props) => {
    const [marker,setMarker] = useState(null);
    const geocoder = useControl(()=>{
        const ctrl = new MapboxGeocoder({
            ...props,
            marker: false,
            accessToken: props.mapboxAccessToken
        });
        ctrl.on('loading', props.onLoading);
        ctrl.on('results', props.onResults);
        ctrl.on('result',evt=>{
            props.onResult(evt);
            
            const{result} = evt;
console.log("result", result)
            // const location = 
            // result&&(
            //     result.center || (result.geometry?.)
            // )
            
            // )
        });

        }
    )

  return (
    <div>Geocoder</div>
  )
}

export default GeocoderControl