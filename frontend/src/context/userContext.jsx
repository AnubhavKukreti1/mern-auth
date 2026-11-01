import React, { createContext, useState, useEffect } from "react";
import api from "../api";

export const dataContext = createContext();

function UserContext({ children }) {
  const [userData, setUserData] = useState(null);
  const [token, setToken] = useState(null);

  const getUserData = async () => {
    try {
      const response = await api.get("/api/auth/getuserdata");
      setUserData(response.data);
    } catch (error) {
      if (error.response?.status === 401) {
        setUserData(null);
        return;
      }

      console.error("Failed to fetch user data:", error);
    }
  };

  const value = {
    userData,
    setUserData,
    token,
    setToken,
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <dataContext.Provider value={value}>
      {children}
    </dataContext.Provider>
  );
}

export default UserContext;
