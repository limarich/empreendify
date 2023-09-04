import { useState } from "react";
import styles from "./styles.module.css";

export const ObjectiveQuestion = ({ description }) => {

  const [value, setValue] = useState(null);

  return (
    <div>
      <p className={styles.description}>
        {description}
      </p>
      <div className={styles.buttons}>
        <a 
          className={styles.button}
          onClick={() => setValue(true)}
          style={(value === true) 
            ? { outline: '2px solid var(--normal-blue-2)' }
            : {}
          }
        >
          Sim 👍
        </a>
        <a 
          className={styles.button}
          onClick={() => setValue(false)}
          style={(value === false) 
            ? { outline: '2px solid var(--normal-blue-2)' }
            : {}
          }
        >
          Não 👎
        </a>
      </div>
    </div>
  );
};
