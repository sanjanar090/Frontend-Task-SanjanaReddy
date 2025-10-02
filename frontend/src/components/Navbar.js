import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaMoon, FaSun, FaSignOutAlt, FaTachometerAlt, FaUserPlus, FaSignInAlt } from "react-icons/fa";
import styles from "../styles/Navbar.module.css";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("username");
    if (storedUser) {
      setUsername(storedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/login");
  };

  const token = localStorage.getItem("token"); // Check if logged in

  return (
    <nav className={`${styles.navbar} ${darkMode ? styles.dark : ""}`}>
      {/* Brand */}
      <div className={styles.logo}>
        <Link to="/dashboard">🚀 Taskify</Link>
        {username && <span className={styles.username}> ({username})</span>}
      </div>

      {/* Links */}
      <div className={styles.links}>
        {token ? (
          <>
            <Link to="/dashboard"><FaTachometerAlt /> Dashboard</Link>
            <button onClick={handleLogout} className={styles.logout}>
              <FaSignOutAlt /> Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login"><FaSignInAlt /> Login</Link>
            <Link to="/register"><FaUserPlus /> Register</Link>
          </>
        )}
        <button onClick={() => setDarkMode(!darkMode)} className={styles.toggle}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
