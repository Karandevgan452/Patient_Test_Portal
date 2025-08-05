// src/pages/LoginPatient.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../css/AuthForm.css";
import { toast } from "react-toastify";
const LoginPatient = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:3000/api/patients/login",
        formData
      );
      const data = res.data;

      localStorage.setItem(
        "userInfo",
        JSON.stringify({
          id: data.id,
          name: data.name,
          email: data.email,
          token: data.token,
        })
      );
      toast.success("Login successful.");
      navigate("/");
    } catch (err) {
        toast.error(err.response?.data?.message || "Login failed.");
      
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page">
      <h2>Patient Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default LoginPatient;
