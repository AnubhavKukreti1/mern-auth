import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

export const dataContext = createContext();

function UserContext({ children }) {
  const [userData, setUserData] = useState(null);
  const [token, setToken] = useState(null);

  const serverUrl = "http://localhost:8000";

  const getUserData = async () => {
    try {
      
      const response = await axios.get(`${serverUrl}/api/auth/getuserdata`, { 
        withCredentials: true 
      });
      
      setUserData(response.data);
    } catch (error) {
      console.error("Failed to fetch user data:", error);
    }
  };

  const value = {
    userData,
    setUserData,
    token,
    setToken,
    serverUrl,
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

