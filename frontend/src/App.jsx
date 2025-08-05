import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import LabTestsPage from "./pages/LabTestsPage";
import BookingsPage from "./pages/BookingsPage";

const PrivateRoute = ({ children }) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  return userInfo?.token ? children : <Navigate to="/login" />;
};

export default function App() {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path = "/about" element = {<AboutPage />}  />
        <Route
          path="/register"
          element={
            userInfo?.token ? <Navigate to="/tests" /> : <RegisterPage />
          }
        />
        <Route
          path="/login"
          element={userInfo?.token ? <Navigate to="/tests" /> : <LoginPage />}
        />

        {/* Protected Routes */}
        <Route
          path="/tests"
          element={
            <PrivateRoute>
              <LabTestsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/bookings"
          element={
            <PrivateRoute>
              <BookingsPage />
            </PrivateRoute>
          }
        />

        {/* Catch All */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
      <Footer />
    </BrowserRouter>
  );
}
