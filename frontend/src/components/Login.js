import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import styles from "../styles/Auth.module.css";
import Navbar from "./Navbar";

function Login() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("login/", formData);
      localStorage.setItem("token", res.data.access);
      localStorage.setItem("refresh", res.data.refresh);
      localStorage.setItem("username", formData.username);
      navigate("/dashboard");
    } catch (err) {
      alert("Invalid username or password");
    }
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.card}>
          <h2>Login to Taskify</h2>
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
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button type="submit">Login</button>
          </form>
          <p className={styles.switchText}>
            Don’t have an account? <a href="/register">Register here</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
