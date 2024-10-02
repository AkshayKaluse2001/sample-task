import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const loggedIn = JSON.parse(localStorage.getItem("LoggedIn"));

  return loggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
