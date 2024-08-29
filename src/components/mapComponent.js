import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import enviroment from '../enviroment/enviroment';
import '../styles/MapComponent.css'

const containerStyle = {
  width: '100%',
  height: '500px'
};

const MapComponent = ({ location }) => {
  const { lat, lng } = location;
  console.log("enviroment",enviroment.contryapi)

  return (
    <LoadScript
      googleMapsApiKey={enviroment.contryapi}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{ lat, lng }}
        zoom={8}
      >
        <Marker position={{ lat, lng }} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
