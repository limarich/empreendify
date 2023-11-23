import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./styles.module.css";

import logo from "../../assets/i9ender-logo.png";
import logoWhite from "../../assets/i9ender-white-logo.svg";

import Ellipse from "../../assets/Ellipse.svg";

import Image1 from "../../assets/LandingPage/Image1.png";
import Image2 from "../../assets/LandingPage/Image2.png";
import Image3 from "../../assets/LandingPage/Image3.png";

import { Message } from "./Message";
import { ListMessage } from "./ListMessage";
import { ToolCard } from "./ToolCard";
import { UserRequestModal } from "../../components/UserRequestModal";

export const LandingPage = () => {
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      <UserRequestModal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
      />
      <div className={styles.landingPage}>
        <header className={styles.headerLandingPage}>
          <div className={styles.logoContainer}>
            <img src={logo} alt="Logo" />
          </div>
          <div className={styles.referencesContainer}>
            <a href="" className={styles.reference}>
              Serviços
            </a>
            <a href="" className={styles.reference}>
              Sobre
            </a>
            <a href="" className={styles.reference}>
              Contato
            </a>
          </div>
          <div className={styles.autenticationContainer}>
            <a
              href="#"
              className={styles.registerButton}
              onClick={() => {
                setShowModal(true);
              }}
            >
              Começar agora!
            </a>
            <a
              href="#"
              className={styles.loginButton}
              onClick={() => {
                navigate("/login");
              }}
            >
              Entrar
            </a>
          </div>
        </header>

        <div className={styles.messageSection}>
          <Message
            title={"Planeje seu trabalho, trabalhe seu plano!"}
            description={
              "Organize as principais definições do seu negócio! Identifique quem são seus fornecedores, clientes e consumidores!"
            }
            handlePopUp={() => {
              setShowPopup(true);
            }}
          />
          <img src={Image1} alt="Image1" className={styles.backgroundImage} />
        </div>

        <div className={styles.toolsSection}>
          <img src={Ellipse} alt="Ellipse" className={styles.Ellipse} />
          <div className={styles.toolsContainer}>
            <div className={styles.ToolCardContainer1}>
              <ToolCard
                title={"Plano de negócios"}
                description={
                  "Guiamos empreendedores na construção de um novo negócio"
                }
              />
            </div>

            <div className={styles.ToolCardContainer2}>
              <ToolCard
                title={"Análise SWOT"}
                description={
                  "Guiamos empreendedores na construção de um novo negócio"
                }
              />
            </div>

            <div className={styles.ToolCardContainer3}>
              <ToolCard
                title={"5W2H"}
                description={
                  "Guiamos empreendedores na construção de um novo negócio"
                }
              />
            </div>

            <div className={styles.ToolCardContainer4}>
              <ToolCard
                title={"Plano de negócios"}
                description={
                  "Guiamos empreendedores na construção de um novo negócio"
                }
              />
            </div>
          </div>
          <div className={styles.MessageToolsSectionContainer}>
            <Message
              title={"Tudo que você precisa em um só lugar!"}
              description={
                "Organize as principais definições do seu negócio! Identifique quem são seus fornecedores, clientes e consumidores!"
              }
              width={400}
              handlePopUp={() => {
                setShowPopup(true);
              }}
            />
          </div>
        </div>

        <div className={styles.formSection}>
          <Message
            title={"Um Plano de Negócios para quem tem pressa!"}
            description={
              "Um plano rápido e dinâmico para quem tem pressa. visualize, planeje e execute cada etapa fundamental do seu plano de negócios com facilidade."
            }
            handlePopUp={() => {
              setShowPopup(true);
            }}
          />
          <div className={styles.imageContainer}>
            <img src={Image2} alt="Image2" className={styles.image} />
          </div>
        </div>

        <div className={styles.advantagesSection}>
          <div className={styles.imageContainer}>
            <img src={Image3} alt="Image3" className={styles.image} />
          </div>

          <ListMessage
            title={"Um Modelo de Negócios que te dá clareza estratégica!"}
            list={[
              "Clareza estratégica",
              "Identificação de oportunidades",
              "Viabilidade financeira",
              "Melhor comunicação e alinhamento",
            ]}
          />
        </div>

        <div className={styles.navSectionContainer}>
          <nav className={styles.navSection}>
            <div className={styles.navMessage}>
              <div className={styles.navLogoContainer}>
                <img src={logoWhite} alt="Logo" className={styles.navLogo} />
              </div>
              <p className={styles.navDescription}>
                Desbloquear seu potencial empresarial é a nossa missão
              </p>
            </div>

            <div className={styles.navContact}>
              <p className={styles.navDescriptionContact}>
                Deixe seu <b>email</b> ou <b>telefone</b>, entraremos em contato
                em breve!
              </p>
              <div>
                <p
                  style={{
                    fontSize: 12,
                  }}
                >
                  Email ou Telefone
                </p>
                <input type="text" />
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* {
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
            Preencha os campos
          </h4>
          
          <div className="form-body">
            <InputControl
              name="login"
              title="Nome"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <InputControl
              name="login"
              title="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="email@gmail.com"
            />
            <InputControl
              name="password"
              title="Senha"
              type="password"
              description="Senha de 8 digitos"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

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
            Continuar
          </a>
        </div>
      </div>
    } */}
    </>
  );
};
