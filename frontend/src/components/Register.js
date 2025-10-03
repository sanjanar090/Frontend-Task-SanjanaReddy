import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import styles from "../styles/Auth.module.css";
import Navbar from "./Navbar";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("register/", formData);
      alert("Registration successful! Please login.");
      navigate("/login");
    } catch (err) {
      console.error("Full error object:", err);

      if (err.response) {
        console.error("Backend error response:", err.response.data);
        alert("Error registering user: " + JSON.stringify(err.response.data));
      } else if (err.request) {
        console.error("No response received:", err.request);
        alert("No response from server. Check if backend is running.");
      } else {
        console.error("Error setting up request:", err.message);
        alert("Error: " + err.message);
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.card}>
          <h2>Register for Taskify</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
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
            <input
              type="password"
              name="password2"
              placeholder="Confirm Password"
              value={formData.password2}
              onChange={handleChange}
              required
            />
            <button type="submit">Register</button>
          </form>
          <p className={styles.switchText}>
            Already have an account? <a href="/login">Login here</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Register;
 