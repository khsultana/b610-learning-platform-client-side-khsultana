import React, { useContext } from "react";
import { FaSpinner } from "react-icons/fa";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/Auth Provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <FaSpinner />;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default PrivateRoute;
