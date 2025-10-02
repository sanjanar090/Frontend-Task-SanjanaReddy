import React, { useState } from "react";
import Navbar from "./Navbar";
import styles from "../styles/Dashboard.module.css";

function Dashboard() {
  const [tasks, setTasks] = useState([]);

  // Add Task
  const handleAddTask = (e) => {
    e.preventDefault();
    const title = e.target.title.value.trim();
    const description = e.target.description.value.trim();

    if (title && description) {
      setTasks([...tasks, { title, description }]);
      e.target.reset();
    }
  };

  // Delete Task
  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <>
      <Navbar />
      <div className={styles.dashboard}>
        <h2>Taskify Dashboard</h2>

        {/* User Info Card */}
        <div className={styles.card}>
          <h3>👋 Welcome</h3>
          <p>
            <strong>User:</strong> {localStorage.getItem("username") || "Guest"}
          </p>
          <p>
            <strong>Email:</strong> user@example.com
          </p>
        </div>

        {/* Add Task Card */}
        <div className={styles.card}>
          <h3>📝 Add a Task</h3>
          <form onSubmit={handleAddTask}>
            <input type="text" name="title" placeholder="Task title" required />
            <textarea
              name="description"
              placeholder="Description"
              required
            ></textarea>
            <button type="submit">Add Task</button>
          </form>
        </div>

        {/* Task List */}
        <div className={styles.taskList}>
          {tasks.map((task, index) => {
            return (
              <div key={index} className={styles.card}>
                <h4>✅ {task.title}</h4>
                <p>{task.description}</p>
                <button
                  className={styles.deleteBtn}
                  onClick={() => handleDeleteTask(index)}
                >
                  ❌ Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
