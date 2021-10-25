import React, { useEffect, useState } from "react";
import { Marker } from "react-leaflet";
import { IconTree } from "./IconLocation";
import axios from "axios";

const Markers = () => {
  const [markers, setMarkers] = useState([]);
  const BASE_URL = "https://prueba.smartseals.co/prueba-frontend";
  const token = localStorage.getItem("token");

  useEffect(() => {
    const getMarkets = async () => {
      await axios(`${BASE_URL}/api/elements`, {
        headers: { token: token },
      }).then((response) => setMarkers(response.data));
    };
    getMarkets();
  }, [token]);

  return (
    <>
      {markers.map((marker, index) => {
        return (
          <Marker
            key={index}
            position={[marker.ubication.longitude, marker.ubication.latitude]}
            icon={IconTree}
          ></Marker>
        );
      })}
    </>
  );
};

export default Markers;
