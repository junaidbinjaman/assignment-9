import React, { useContext, useEffect, useState } from "react";
import "./Destination.css";
import "./Destination.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";
import Map from "../../img/map-img/Map.png";
import Bike from "../../vehicles/bikedata.json";
import Car from "../../vehicles/cardata.json";
import Bus from "../../vehicles/busdata.json";
import Metro from "../../vehicles/metrodata.json";
import Vehivles from "../Vehicles/Vehivles";
import { selectedVehicle } from "../../App";
import GoogleMap from "../GoogleMap/GoogleMap";

const Destination = () => {
  const [vehicleData] = useContext(selectedVehicle);

  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    let data;
    if (vehicleData === "bike") {
      data = Bike;
    }
    if (vehicleData === "car") {
      data = Car;
    }

    if (vehicleData === "bus") {
      data = Bus;
    }

    if (vehicleData === "metro") {
      data = Metro;
    }

    setVehicles(data);
  }, []);

  const [handleBtn, setHandleBtn] = useState(false);
  const handleLocationSearchButton = (Event) => {
    Event.preventDefault();
    setHandleBtn(true);
  };
  let searchForm;
  if (handleBtn === true) {
    searchForm = "none";
  }
  if (handleBtn === false) {
    searchForm = "block";
  }

  let searchResult;
  if (handleBtn === true) {
    searchResult = "block";
  }
  if (handleBtn === false) {
    searchResult = "none";
  }
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  var mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");
  return (
    <div>
      <div className="destination-container">
        <div className="search-destination">
          <form action="" className="form" style={{ display: searchForm }}>
            <div className="from-section">
              <label for="from"> Pick From </label> <br />
              <input
                type="text"
                id="from"
                name="from"
                onChange={(event) => setFromLocation(event.target.value)}
              />{" "}
            </div>{" "}
            <div className="from-section">
              <label for="to"> Pick To </label> <br />
              <input
                type="text"
                id="to"
                name="to"
                onChange={(event) => setToLocation(event.target.value)}
              />{" "}
            </div>{" "}
            <input
              value="Search"
              type="submit"
              onClick={handleLocationSearchButton}
            />{" "}
          </form>{" "}
          <div style={{ display: searchResult }} className="result-destination">
            <h3>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> From:{" "}
              <strong> {fromLocation} </strong>{" "}
            </h3>{" "}
            <h3>
              <FontAwesomeIcon icon={faMapMarkedAlt} /> To:{" "}
              <strong> {toLocation} </strong>{" "}
            </h3>{" "}
            <input className="data" type="date" />
          </div>{" "}
          <div className="vehicle-component" style={{ display: searchResult }}>
            {" "}
            {vehicles &&
              vehicles.map((vehicle) => (
                <Vehivles vehicle={vehicle} key={vehicle.vehicleImg}>
                  {" "}
                </Vehivles>
              ))}{" "}
          </div>{" "}
        </div>{" "}
        <div className="map-destination" id="mapArea">
          <GoogleMap></GoogleMap>
        </div>
      </div>{" "}
    </div>
  );
};

export default Destination;
