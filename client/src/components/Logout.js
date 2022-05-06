import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "./contexts/AuthContext";

const Logout = () => {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const logout = authContext.logout;
  console.log('Logging out')
  useEffect(() => {
    const logoutUser = async () => {
      const response = await fetch("/auth/logout");
      if (response.status === 200) {
        logout();
         navigate(-1);
      } else {
        alert("logout failed");
        navigate(-1);
      }
    };
    logoutUser();
    console.log('Logged out')
  }, [navigate]);
  return null;
};

export default Logout;
