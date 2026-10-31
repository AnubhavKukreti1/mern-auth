import { Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/login";
import Home from "./pages/Home";
import { useContext } from "react";
import { dataContext } from "./context/userContext";

function App() {
  const { userData } = useContext(dataContext);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/signup" replace />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={userData ? <Home /> : <Navigate to="/login" />} />
    </Routes>
  );
}

export default App;