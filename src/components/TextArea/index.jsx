import React from "react";
import styles from "./textarea.module.css";

export const TextArea = ({ name, hasError, ...rest }) => {
  return (
    <div className={styles.container}>
      <label htmlFor={name}>{name}</label>
      <textarea
        name={name}
        className={hasError ? `${styles.error}` : ""}
        {...rest}
      />
    </div>
  );
};
