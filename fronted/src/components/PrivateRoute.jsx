import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "./useContext";

function PrivateRoute({ allowedRoles }) {
  const { user } = useUser();
  console.log("PrivateRoute", user);

  if (!user) {
    console.log("Login required");
    return <Navigate to="/" />;
  }

  if(allowedRoles && !allowedRoles.includes(user.tipo)){
    console.log("User not allowed");
    return <Navigate to="/access-denied" />;
  }

  return <Outlet />;
}

export default PrivateRoute;