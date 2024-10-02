import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = () => {
  const loggedIn = JSON.parse(localStorage.getItem("LoggedIn"));

  return loggedIn ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoutes;
