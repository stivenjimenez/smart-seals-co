import React, { useEffect, useState } from "react";
import { Marker, Popup } from "react-leaflet";
import axios from "axios";
import { IconTree } from "./IconLocation";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";

import "./index.css";

const Markers = ({ setModal, setFormId }) => {
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
          >
            <Popup>
              <div className="map__popup--container">
                <p className="map__popup--title">Información</p>
                <span className="map__popup--text">
                  <strong>Nombre: </strong>
                  Marlon Segundo
                </span>
                <span className="map__popup--text">
                  <strong>Equipo: </strong>
                  Redmi Note 9S
                </span>
                <span className="map__popup--text">
                  <strong>Nivel de señal: </strong>
                  <AiIcons.AiFillSignal className="map__popup--icon" />
                </span>
                <span className="map__popup--text">
                  <strong>Almacenamiento: </strong>
                  84.88/107.203 GB
                </span>
                <span className="map__popup--text-center">
                  <strong>Nivel de batería: </strong>
                  <FaIcons.FaBatteryThreeQuarters className="map__popup--icon" />
                </span>
                <span className="map__popup--text">
                  <strong>Memoria RAM: </strong>
                  5,45 GB
                </span>
                <button
                  className="map__popup--button"
                  onClick={() => {
                    setModal(true);
                    setFormId(marker.formId);
                  }}
                >
                  Ver detalles
                </button>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </>
  );
};

export default Markers;
