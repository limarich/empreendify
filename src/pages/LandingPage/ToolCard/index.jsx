import React from "react";
import styles from "./styles.module.css";

export function ToolCard({ title, description }) {
  return(
    <div className={styles.message}>
      <h3 className={styles.title}>
        {title}
      </h3>
      <p className={styles.description}>
        {description}
      </p>
      <a href="#" className={styles.button}>
        Saiba mais!
      </a>
    </div>
  );
}