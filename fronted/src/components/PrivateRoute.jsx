import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "./useContext";

function PrivateRoute({ allowedRoles }) {
  const { user } = useUser();
  console.log("PrivateRoute", user);

  if (!user) {
    return <Navigate to="/login" />;
  }

  if(allowedRoles && !allowedRoles.includes(user.tipo)){
    return <Navigate to="/access-denied" />;
  }

  return <Outlet />;
}

export default PrivateRoute;