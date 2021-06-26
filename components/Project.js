import React from "react";
import styles from "../styles/projects.module.css";

const Project = () => {
  return (
    <div className={styles.container}>
      <img src="http://lorempixel.com/500/500/" className={styles.image} />
      <div className={styles.overlay}>
        <div className={styles.text}>Hello World</div>
      </div>
    </div>
  );
};

export default Project;
