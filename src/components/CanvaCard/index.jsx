import { useState } from "react";
import styles from "./styles.module.css";

export function CanvaCard({ label, title, description, type }) {
  return(
    <div className={styles.canva}>
      <div className={styles.canvaContent}>
        <div className={styles.canvaHeader}>
          <div className={`canvaTag ${type}`}>
            {label}
          </div>
        </div>
        <div className={styles.canvaTitle}>
          {title}
        </div>
        <div className={styles.canvaDescription}>
          {description}
        </div>
        <textarea className={styles.canvaInput}></textarea>
      </div>
    </div>
  );
}