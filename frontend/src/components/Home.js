import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import styles from "../styles/Home.module.css";

function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.hero}>
        <div className={styles.content}>
          <h1>Welcome to <span>Taskify</span></h1>
          <p>
            Organize your work, manage tasks, and stay productive.
            <br />
            Secure authentication, a clean dashboard, and a smooth experience.
          </p>
          <div className={styles.buttons}>
            <Link to="/login" className={styles.primaryBtn}>Login</Link>
            <Link to="/register" className={styles.secondaryBtn}>Register</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
