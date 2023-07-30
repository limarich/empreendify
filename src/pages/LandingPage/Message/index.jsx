import React from "react";
import styles from "./styles.module.css";

export function Message({ title, description }) {
  return(
    <div className={styles.message}>
      <h1 className={styles.title}>
        {title}
      </h1>
      <p className={styles.description}>
        {description}
      </p>
      <a href="#" className={styles.registerButton}>
        Começar agora!
      </a>
    </div>
  );
}