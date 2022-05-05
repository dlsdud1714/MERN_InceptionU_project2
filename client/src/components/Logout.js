import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  console.log('Logging out')
  useEffect(() => {
    const logout = async () => {
      const response = await fetch("/auth/logout123");
      if (response.status === 200) {
        navigate(-1);
      } else {
        alert("logout failed");
        navigate(-1);
      }
    };
    logout();
    console.log('Logged out')
  }, []);
  return null;
};

export default Logout;
