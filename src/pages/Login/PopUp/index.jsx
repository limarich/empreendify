import { useState } from "react";

import styles from './styles.module.css';
import { InputControl } from "../../../components/InputControl";

export const PopUp = ({ showPopup, setShowPopup }) => {
  const widthOfPopup = 500;

  const [email, setEmail] = useState("");

  return (
    <>
      {
        showPopup && 
        <div 
          id="Fade"
          className={styles.fade}
          style={showPopup && {
            display: 'flex',
            border: '0px solid blue'
          }}
          onClick={(event) => {
            const popup = document.getElementById("popup");
            if (!popup.contains(event.target)) {
              setShowPopup(false);
            }
          }}
        >
          <div 
            id="popup"
            className={styles.popup}
            style={{
              width: widthOfPopup,
              left: `calc(50% - ${widthOfPopup / 2}px)`
            }}
          >
            <h4 className={styles.popupTitle}>
              Esqueceu a senha?
            </h4>

            <InputControl
              name="login"
              title="Digite seu email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="email@gmail.com"
            />
            
            <a 
              href="#" 
              className={styles.popupButton}
              style={{
                height: 40,
                fontSize: 13,
                borderRadius: 30
              }}
              onClick={() => setShowPopup(false)}
            >
              Solicitar nova senha
            </a>
          </div>
        </div>
      }
    </>
  );
};
