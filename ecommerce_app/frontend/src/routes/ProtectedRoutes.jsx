import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return children;
};

export default ProtectedRoutes;
