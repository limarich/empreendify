import React from "react";
import styles from "./styles.module.css";

import logo from "../../assets/logo-empreendify.png";
import amico from "../../assets/amico.png";

export const LandingPage = () => {
  return(
    <div className={styles.landingPage}>
      <header className={styles.headerLandingPage}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="Logo" />
        </div>
        <div className={styles.referencesContainer}>
          <a href="" className={styles.reference}>Serviços</a>
          <a href="" className={styles.reference}>Sobre</a>
          <a href="" className={styles.reference}>Contato</a>
        </div>
        <div className={styles.autenticationContainer}>
          <a href="#" className={styles.registerButton}>Começar agora!</a>
          <a href="#" className={styles.loginButton}>Entrar</a>
        </div>
      </header>
      <div className={styles.messageSection}>
        <div className={styles.message}>
          <h1 className={styles.title}>
            Planeje seu trabalho, trabalhe seu plano!
          </h1>
          <p className={styles.description}>
            Organize as principais definições do seu negócio! Identifique quem são seus fornecedores, clientes e consumidores!
          </p>
          <a href="#" className={styles.registerButton}>
            Começar agora!
          </a>
        </div>
        <img src={amico} alt="Imagem" 
          className={styles.backgroundImage}
        />
      </div>
      <div className={styles.toolsSection}>

      </div>
      <div className={styles.formSection}>

      </div>
      <div className={styles.advantagesSection}>

      </div>
      <nav className={styles.navSection}>

      </nav>
    </div>
  )
}