import { useState } from "react";
import styles from "./styles.module.css";

import './styles.module.css';

export function CanvaCard({ label, title, description, type }) {
  return(
    <div className={styles.canva}>
      <div className={styles.canvaContent}>
        <div className={styles.canvaHeader}>
          <div 
            className={`${type}`}
            style={{
              height: '25px',
              padding: 10,
              borderRadius: '25px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 700,
              fontSize: 8
            }}
          >
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