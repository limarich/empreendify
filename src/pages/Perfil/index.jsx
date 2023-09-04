import { Container } from "../../components/Container";

import { SectionHeader } from "../../components/SectionHeader";

import styles from "./styles.module.css";

export const Perfil = () => {
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
            <a href="#" className={styles.saveButton}>
              Salvar
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};
