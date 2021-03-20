import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import "./Header.css";

const Header = () => {
  const [loggedInUser] = useContext(UserContext);
  return (
    <div className="header-section">
      <div className="logo-section">
        <h3>
          <Link to="/"> Metro City Ride </Link>{" "}
        </h3>{" "}
      </div>{" "}
      <div className="navbar-section">
        <ul>
          <li>
            <Link to="/home"> Home </Link>{" "}
          </li>{" "}
          <li>
            <Link to="/destination/bike"> Destination </Link>{" "}
          </li>{" "}
          <li>
            <Link to="/blog"> Blog </Link>{" "}
          </li>{" "}
          <li>
            <Link to="/contact"> Contact Us </Link>{" "}
          </li>{" "}
          <li>
            <Link to="/login">
              {" "}
              {loggedInUser.email ? (
                <p style={{ marginTop: "-1px" }}>
                  {" "}
                  {loggedInUser.email.slice(0, 8)}{" "}
                </p>
              ) : (
                <button> Login </button>
              )}{" "}
            </Link>{" "}
          </li>{" "}
        </ul>{" "}
      </div>{" "}
      <div className="header-devider"> </div>{" "}
    </div>
  );
};

export default Header;
