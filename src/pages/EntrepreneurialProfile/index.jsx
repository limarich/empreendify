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
        </div>
      </div>
    </Container>
  );
};
