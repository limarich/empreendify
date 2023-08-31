import React from "react";
import styles from "./styles.module.css";

export function ListMessage({ title, list }) {
  return(
    <div className={styles.message}>
      <h1 className={styles.title}>
        {title}
      </h1>
      <ul className={styles.unorderedList}>
        {
          list.map((value) => {
            return (
              <li className={styles.listItem}>{value}</li>
            )
          })
        }
      </ul>
    </div>
  );
}