import { Container } from "../../components/Container";
import { SectionHeader } from '../../components/SectionHeader';

import { ObjectiveQuestion } from './ObjectiveQuestion';

import styles from "./styles.module.css";

export const EntrepreneurialProfile = () => {
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
              onClick={() => {}}
            >
              Finalizar
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};
