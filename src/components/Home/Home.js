import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Bike from "../../img/Transportation-img/bike.jpg";
import Car from "../../img/Transportation-img/var.jpg";
import Bus from "../../img/Transportation-img/bus.jpg";
import MetroTrain from "../../img/Transportation-img/unnamed.jpg";
import { selectedVehicle } from "../../App";

const Home = () => {
  const [vehicleData, setVehicleData] = useContext(selectedVehicle);
  const bike = () => {
    document.getElementById("bike");
    setVehicleData("bike");
  };

  const car = () => {
    document.getElementById("car");
    setVehicleData("car");
  };

  const bus = () => {
    document.getElementById("bus");
    setVehicleData("bus");
  };

  const metro = () => {
    document.getElementById("metro");
    setVehicleData("metro");
  };

  return (
    <div className="home-section">
      <div className="bike-section">
        <Link to="destination/bike">
          <img onClick={bike} id="bike" src={Bike} alt="" />
        </Link>{" "}
      </div>{" "}
      <div className="car-section">
        <Link to="destination/car">
          <img onClick={car} id="car" src={Car} alt="" />
        </Link>{" "}
      </div>{" "}
      <div className="bus-section">
        <Link to="destination/bus">
          <img onClick={bus} id="bus" src={Bus} alt="" />
        </Link>{" "}
      </div>{" "}
      <div className="Metro-train-section">
        <Link to="destination/metrotrain">
          <img onClick={metro} id="metro" src={MetroTrain} alt="" />
        </Link>{" "}
      </div>{" "}
    </div>
  );
};

export default Home;
