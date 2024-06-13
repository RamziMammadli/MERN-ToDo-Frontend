import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      navigate("/dashboard");
    } 
  }, [navigate, userInfo]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Welcome to TODO App</h1>
        <p className={styles.description}>
          Manage your tasks with our simple TODO
          app.
        </p>
        <div className={styles.buttons}>
          <button onClick={() => navigate("/login")} className={styles.button}>
            Login
          </button>
          <button
            onClick={() => navigate("/register")}
            className={styles.button}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
