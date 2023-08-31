import React from "react";
import styles from "./styles.module.css";

import logo from "../../assets/logo-empreendify.png";

import Ellipse from "../../assets/Ellipse.svg";

import Image1 from "../../assets/LandingPage/Image1.png";
import Image2 from '../../assets/LandingPage/Image2.png';
import Image3 from '../../assets/LandingPage/Image3.png';

import { Message } from "./Message";
import { ListMessage } from "./ListMessage";
import { ToolCard } from "./ToolCard";

export const LandingPage = () => {
  return(
    <div className={styles.landingPage}>advantagesImage
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
        <img src={Image1} alt="Image1" 
          className={styles.backgroundImage}
        />
      </div>

      <div 
        className={styles.toolsSection}
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
        <div className={styles.imageContainer}>
          <img
            src={Image2} alt="Image2"
            className={styles.image} 
          />
        </div>
      </div>

      <div className={styles.advantagesSection}>
        <div className={styles.imageContainer}>
          <img
            src={Image3} alt="Image3" 
            className={styles.image}
          />
        </div>

        <ListMessage
          title={"Um Modelo de Negócios que te dá clareza estratégica!"}
          list={[
            "Clareza estratégica",
            "Identificação de oportunidades",
            "Viabilidade financeira",
            "Melhor comunicação e alinhamento"
          ]}
        />

      </div>

      <nav className={styles.navSection}>
      </nav>
    </div>
  )
}