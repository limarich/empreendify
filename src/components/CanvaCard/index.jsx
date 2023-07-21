import { useState } from "react";
import styles from "./styles.module.css";

export function CanvaCard({ label, title, description }) {
  return(
    <div class={styles.canva}>
      <div class={styles.canvaContent}>
        <div class={styles.canvaHeader}>
          <div class={styles.canvaTag}>
            {label}
          </div>
        </div>
        <div class={styles.canvaTitle}>
          {title}
        </div>
        <div class={styles.canvaDescription}>
          {description}
        </div>
        <textarea class={styles.canvaInput}></textarea>
      </div>
    </div>
  );
}