import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../Components/Spinner";

const PrivateLayout = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const location = useLocation();

  if (loader) {
    return <Spinner />;
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/auth/login" replace />;
};

export default PrivateLayout;
