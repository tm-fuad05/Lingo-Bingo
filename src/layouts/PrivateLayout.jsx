import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import Spinner from "../Components/Spinner";

const PrivateLayout = ({ children }) => {
  const { user, loader } = useContext(AuthContext);

  if (loader) {
    return <Spinner></Spinner>;
  }

  if (user) {
    return children;
  }

  return (
    <div>
      <Navigate to="/"></Navigate>
    </div>
  );
};

export default PrivateLayout;
