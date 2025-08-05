import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));


  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    navigate("/login");
  };

 
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
       <Link to = "/about">About</Link>
      {userInfo?.token ? (
        <>
          <Link to="/tests">Lab Tests</Link>
          <Link to="/bookings">Bookings</Link>
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
};
