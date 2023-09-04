import { useState } from "react";
import { Container } from "../../components/Container";
import { SectionHeader } from '../../components/SectionHeader';

import { ObjectiveQuestion } from './ObjectiveQuestion';

import styles from "./styles.module.css";

export const EntrepreneurialProfile = () => {

  const [showPopup, setShowPopup] = useState(false);
  const widthOfPopup = 500;

  return (
    <Container>
      <div className={styles.contentContainer}>
        <SectionHeader
          title={"Análise do Perfil Empreendedor"}
          description={"Aqui você responderá algumas perguntas e o resultado dirá se você já está pronto para empreender ou se precisará desenvolver algumas competências empreendedoras antes de abrir seu próprio negócio. Vamos começar?"}
        />
        <div className={styles.formContainer}>
          <ObjectiveQuestion 
            description={"Você se percebe pronto para empreender?"}
          />
          <ObjectiveQuestion 
            description={"Alguma vez você já tentou empreender?"}
          />
          <ObjectiveQuestion 
            description={"Você acha que esta é a hora de mudar de lado deixando de ser empregado para ser empregador, empreendedor?"}
          />
          <ObjectiveQuestion 
            description={"Você já escolheu um nicho ou segmento para seu negócio?"}
          />
          <ObjectiveQuestion 
            description={"Você se relaciona bem com as pessoas em geral?"}
          />
          <ObjectiveQuestion 
            description={"Sente que precisa crescer na questão relacional, pois sendo empreendedor você precisará lidar bem com as pessoas e seu conflitos dentro e fora de sua empresa (funcionários, clientes). Você se sente pronto?"}
          />

          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button
              className={styles.submitButton}
              onClick={() => {
                setShowPopup(true)
              }}
            >
              Finalizar
            </button>
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
                width: widthOfPopup,
                left: `calc(50% - ${widthOfPopup / 2}px)`
              }}
            >
              <h4 className={styles.popupTitle}>
                Cada um tem o seu tempo!
              </h4>
              <p className={styles.popupDescription}>
                À primeira vista o Business Model Canvas parece um simples diagrama. A facilidade de análise que ele traz só passa a ser realmente compreendida à medida que começarmos a visualizar exemplos e a utilizá-lo em nosso dia-a-dia.
              </p>
              <a 
                href="#" 
                className={styles.popupButton}
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
