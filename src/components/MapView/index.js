import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import Markers from "./Markers";
import "./index.css";

const MapView = () => {
  return (
    <div>
      <MapContainer
        center={[10.9938351, -74.8061442]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Markers />
      </MapContainer>
    </div>
  );
};

export default MapView;
