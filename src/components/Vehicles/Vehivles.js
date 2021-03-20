import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";
import "./Vehicles.css";

const Vehivles = (props) => {
  const { vehicleImg, name, totalPassenger, fare } = props.vehicle;
  return (
    <div className="vehivle-section">
      <div className="vehicle-img">
        <img width="100px" height="80px" src={vehicleImg} alt="" />
      </div>
      <div className="vehicle-info">
        <p>{name}</p>
        <p>
          <FontAwesomeIcon icon={faUserFriends} /> {totalPassenger}
        </p>
        <p>{fare}</p>
      </div>
    </div>
  );
};

export default Vehivles;
