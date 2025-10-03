import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
});

// 🔑 Attach token only for protected routes
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  // Don't attach token for register/login
  if (
    token &&
    !config.url.includes("register") &&
    !config.url.includes("login")
  ) {
    config.headers.Authorization = `Token ${token}`;
  }

  return config;
});

export default API;
