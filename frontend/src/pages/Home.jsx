import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { dataContext } from '../context/userContext';
import api from "../api";

const Home = () => {
  const { userData, setUserData } = useContext(dataContext);
  const navigate = useNavigate();

  // Handle Logout
  const handleLogout = async () => {
    try {
      await api.post("/api/auth/logout", {});
      setUserData(null); // Clear context data
      navigate('/login');   // Redirect to login page
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  // If data hasn't loaded yet, show a loader
  if (!userData) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-500 font-medium text-sm">Loading your profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Top Navigation Bar */}
      <header className="bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-black text-white font-bold">
            {userData.firstName ? userData.firstName[0].toUpperCase() : "U"}
          </div>
          <span className="font-semibold text-lg tracking-tight">Dashboard</span>
        </div>

        <button
          onClick={handleLogout}
          className="px-4 py-2 text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-xl transition-all duration-200 border border-red-200"
        >
          Logout
        </button>
      </header>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto p-8 space-y-6">
        
        {/* Welcome Hero Card */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-3xl p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          
          <div className="flex items-center gap-6 z-10">
            <img 
              src={userData.profileImage || userData.avatar || "https://via.placeholder.com/150"} 
              alt={`${userData.firstName || "User"}'s profile`} 
              className="w-24 h-24 rounded-full object-cover border-4 border-green-500 shadow-2xl"
            />
            
            <div>
              <span className="text-xs uppercase tracking-widest text-green-400 font-semibold">Verified Account</span>
              <h1 className="text-3xl font-extrabold mt-1">
                Welcome back, {userData.firstName || userData.name || "User"}! 👋
              </h1>
              <p className="text-gray-300 text-sm mt-1">
                {userData.email ? userData.email : "Glad to have you here today."}
              </p>
            </div>
          </div>

          <div className="z-10 bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/15 text-sm">
            <p className="text-gray-300 text-xs">Status</p>
            <p className="text-green-400 font-semibold flex items-center gap-2 mt-0.5">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              Active Session
            </p>
          </div>

          {/* Decorative background circle */}
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-green-500/10 rounded-full blur-3xl pointer-events-none"></div>
        </div>

        {/* Quick Info Grid / Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
            <h3 className="text-sm font-medium text-gray-500">Account Type</h3>
            <p className="text-xl font-bold mt-2 text-gray-800">Standard User</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
            <h3 className="text-sm font-medium text-gray-500">Security</h3>
            <p className="text-xl font-bold mt-2 text-green-600">Encrypted & Secure</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
            <h3 className="text-sm font-medium text-gray-500">Member Since</h3>
            <p className="text-xl font-bold mt-2 text-gray-800">
              {userData.createdAt ? new Date(userData.createdAt).toLocaleDateString() : "Recent"}
            </p>
          </div>
        </div>

      </main>
    </div>
  );
};

export default Home;