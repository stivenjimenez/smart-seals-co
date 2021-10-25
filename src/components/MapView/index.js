import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./index.css";

const MapView = () => {
  return (
    <div>
      <MapContainer
        center={[6.2442023, -75.61623]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapView;
