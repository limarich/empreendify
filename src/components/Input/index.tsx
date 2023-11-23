import React from "react";
import styles from "./input.module.css";

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  hasError?: boolean;
}

export const Input = ({ name, hasError, ...rest }: Props) => {
  return (
    <div className={styles.container}>
      <label htmlFor={name}>{name}</label>
      <input
        type="text"
        name={name}
        className={hasError ? `${styles.error}` : ""}
        {...rest}
      />
    </div>
  );
};
