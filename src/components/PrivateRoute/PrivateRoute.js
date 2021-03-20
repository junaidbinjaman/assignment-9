import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import { UserContext } from "../../App";
import Destination from "../Destination/Destination";

const PrivateRoute = () => {
  const [loggedInUser] = useContext(UserContext);
  console.log(loggedInUser);
  return (
    <Route
      render={({ location }) =>
        loggedInUser.email ? (
          <Destination />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
