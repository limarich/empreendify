import { useState } from "react";
import { Container } from "../../components/Container";

import styles from "./styles.module.css";
import './styles.module.css';

export const Profile = () => {
  const [showPopup, setShowPopup] = useState(false);
  const width = 320;

  return (
    <Container>
      <div className={styles.contentContainer}>

        <div className={styles.content}>
          <p className={styles.title}>Meu Perfil</p>

          <div className={styles.dataContainer}>
            <header className={styles.dataHeader}>
              Informações pessoais
            </header>
            <div className={styles.inputs}>

              <p className={styles.questionTitle}>Nome</p>
              <input className={styles.inputElement} type="text"/>
              <p className={styles.questionTitle}>Email</p>
              <input className={styles.inputElement} type="text"/>
              <p className={styles.questionTitle}>Telefone</p>
              <input className={styles.inputElement} type="text"/>

            </div>
            <a 
              href="#" 
              className={styles.button}
              onClick={() => setShowPopup(true)}
            >
              Salvar
            </a>
          </div>
        </div>
      </div>
      {
        showPopup &&
        <>
          <div className={styles.fade}
            style={showPopup && {
              display: 'flex',
              border: '0px solid blue'
            }}
          >
          <div className={styles.popup}
            style={{
              width: width,
              left: `calc(50% - ${width / 2}px)`
            }}
          >
            <h4 className={styles.popupTitle}>
              Sucesso! 🎉
            </h4>
            <p className={styles.popupDescription}>
              Suas informações foram salvas com sucesso. 
              Clique em continuar para prosseguir!
            </p>
            <a 
              href="#" 
              className={styles.button}
              style={{
                height: 30,
                fontSize: 13,
                borderRadius: 30
              }}
              onClick={() => setShowPopup(false)}
            >
              Continuar
            </a>
          </div>
          </div>
        </>
      }
    </Container>
  );
};
