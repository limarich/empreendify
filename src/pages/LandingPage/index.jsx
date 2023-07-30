import React from "react";
import styles from "./styles.module.css";

import logo from "../../assets/logo-empreendify.png";
import amico from "../../assets/amico.png";
import Ellipse from "../../assets/Ellipse.svg";
import { Message } from "./Message";
import { ToolCard } from "./ToolCard";

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
        <Message 
          title={"Planeje seu trabalho, trabalhe seu plano!"}
          description={"Organize as principais definições do seu negócio! Identifique quem são seus fornecedores, clientes e consumidores!"}
        />
        <img src={amico} alt="Imagem" 
          className={styles.backgroundImage}
        />
      </div>
      <div 
        className={styles.toolsSection}
        style={{}}
      >
        <img 
          src={Ellipse} 
          alt="Ellipse" 
          className={styles.Ellipse}
        />
        <div className={styles.toolsContainer}>
          <ToolCard
            title={"Plano de negócios"}
            description={"Guiamos empreendedores na construção de um novo negócio"}
          />
          <ToolCard
            title={"Análise SWOT"}
            description={"Guiamos empreendedores na construção de um novo negócio"}
          />
          <ToolCard
            title={"5W2H"}
            description={"Guiamos empreendedores na construção de um novo negócio"}
          />
          <ToolCard
            title={"Plano de negócios"}
            description={"Guiamos empreendedores na construção de um novo negócio"}
          />
        </div>
        <Message 
          title={"Tudo que você precisa em um só lugar!"}
          description={"Organize as principais definições do seu negócio! Identifique quem são seus fornecedores, clientes e consumidores!"}
        />
      </div>
      <div className={styles.formSection}>
        <Message 
          title={"Um Plano de Negócios para quem tem pressa!"}
          description={"Um plano rápido e dinâmico para quem tem pressa. visualize, planeje e execute cada etapa fundamental do seu plano de negócios com facilidade."}
        />
      </div>
      <div className={styles.advantagesSection}>

      </div>
      <nav className={styles.navSection}>

      </nav>
    </div>
  )
}