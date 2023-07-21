import { useState } from "react";
import styles from "./styles.module.css";

export function CanvaCard() {
  return(
    <div class={styles.canva}>
      <div class={styles.canvaContent}>
        <div class={styles.canvaHeader}>
          <div class={styles.canvaTag}>
            {"Label"}
          </div>
        </div>
        <div class={styles.canvaTitle}>
          {"Title"}
        </div>
        <div class={styles.canvaDescription}>
          {"Description"}
        </div>
        <textarea class={styles.canvaInput}></textarea>
      </div>
    </div>
  );
}