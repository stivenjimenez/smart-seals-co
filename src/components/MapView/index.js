import React, { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import Markers from "./Markers";
import Modal from "./Modal";
import "./index.css";

const MapView = () => {
  const [modal, setModal] = useState(false);
  const [formId, setFormId] = useState("");
  return (
    <div>
      <Modal formId={formId} modal={modal} setModal={setModal} />
      <MapContainer
        center={[10.9938351, -74.8061442]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Markers setModal={setModal} setFormId={setFormId} />
      </MapContainer>
    </div>
  );
};

export default MapView;
