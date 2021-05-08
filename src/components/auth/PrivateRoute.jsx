import React from "react";
import { Route } from "react-router-dom";
import { isLoaded, isEmpty } from "react-redux-firebase";
import { useSelector } from "react-redux";
import Fallback from "../Fallback";

const PrivateRoute = ({ children, ...props }) => {
  const auth = useSelector((state) => state.firebase.auth);
  return (
    <Route
      {...props}
      render={() => {
        return isLoaded(auth) && !isEmpty(auth) ? children : <Fallback />;
      }}
    />
  );
};

export default PrivateRoute;
