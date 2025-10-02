import React, { useState } from "react";
import Navbar from "./Navbar";
import styles from "../styles/Dashboard.module.css";

function Dashboard() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;

    if (title && description) {
      setTasks([...tasks, { title, description }]);
      e.target.reset();
    }
  };

  return (
    <>
      <Navbar />
      <div className={styles.dashboard}>
        <h2>Taskify Dashboard</h2>

        <div className={styles.card}>
          <h3>👋 Welcome</h3>
          <p><strong>User:</strong> {localStorage.getItem("username") || "Guest"}</p>
          <p><strong>Email:</strong> user@example.com</p>
        </div>

        <div className={styles.card}>
          <h3>📝 Add a Task</h3>
          <form onSubmit={handleAddTask}>
            <input type="text" name="title" placeholder="Task title" />
            <textarea name="description" placeholder="Description"></textarea>
            <button type="submit">Add Task</button>
          </form>
        </div>

        <div className={styles.taskList}>
          {tasks.map((task, index) => (
            <div key={index} className={styles.card}>
              <h4>✅ {task.title}</h4>
              <p>{task.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
