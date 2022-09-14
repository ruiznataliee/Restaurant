import React from "react";
import GoogleMapReact from "google-map-react";


import useStyles from "./styles.js";

const Map = ({setCoordinates, setBounds, coordinates}) => {
    const classes = useStyles();

   

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDNpag1pEsvlOy__oBkPoRb4tO2wGJZREA" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={(e) => {
            setCoordinates({ lat: e.center.lat, lng: e.center.lng });
            setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
          }}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
