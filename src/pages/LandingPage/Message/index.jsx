import React from "react";
import styles from "./styles.module.css";

export function Message({ title, description, width }) {
  return(
    <div className={styles.message}
      style={{
        width: width
      }}
    >
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