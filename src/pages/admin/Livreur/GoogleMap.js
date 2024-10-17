// GoogleMap.js
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const GoogleMapComponent = ({ lat, lng }) => {
  const center = { lat, lng };

  return (
    <LoadScript googleMapsApiKey="VOTRE_API_KEY_GOOGLE_MAPS">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
