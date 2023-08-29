import React from "react";
import "./styles.css";

import { SectionHeader } from "../../components/SectionHeader";
import { EntrepreneurialCard } from "./EntrepreneurialCard";
import { Container } from "../../components/Container";

export const texts = [
  {
    title: "Análise da atividade empreendedora",
    abstract:
      "À primeira vista o Business Model Canvas parece um simples diagrama. A facilidade de análise que ele traz só passa.",
    text: `
      TEXTO 1
      
      À primeira vista o Business Model Canvas parece um simples diagrama.

      À primeira vista o Business Model Canvas parece um simples diagrama. A facilidade de análise que ele traz só passa a ser realmente compreendida à medida que começarmos a visualizar exemplos e a utilizá-lo em nosso dia-a-dia. Obrigado pela ajuda!

















      
      `,
  },
  {
    title: "Quais os setores funcionais da empresa?",
    abstract:
      "À primeira vista o Business Model Canvas parece um simples diagrama. A facilidade de análise que ele traz só passa.",
    text: `
      TEXTO 2
      
      À primeira vista o Business Model Canvas parece um simples diagrama.

      À primeira vista o Business Model Canvas parece um simples diagrama. A facilidade de análise que ele traz só passa a ser realmente compreendida à medida que começarmos a visualizar exemplos e a utilizá-lo em nosso dia-a-dia. Obrigado pela ajuda!
      `,
  },
  {
    title: "Entrevista com os coordenadores de cada setor",
    abstract:
      "À primeira vista o Business Model Canvas parece um simples diagrama. A facilidade de análise que ele traz só passa.",
    text: `
      TEXTO 3
      
      À primeira vista o Business Model Canvas parece um simples diagrama.

      À primeira vista o Business Model Canvas parece um simples diagrama. A facilidade de análise que ele traz só passa a ser realmente compreendida à medida que começarmos a visualizar exemplos e a utilizá-lo em nosso dia-a-dia. Obrigado pela ajuda!
      `,
  },
  {
    title: "Quais os principais problemas pós observação e diagnóstico?",
    abstract:
      "À primeira vista o Business Model Canvas parece um simples diagrama. A facilidade de análise que ele traz só passa.",
    text: `
      TEXTO 4
      
      À primeira vista o Business Model Canvas parece um simples diagrama.

      À primeira vista o Business Model Canvas parece um simples diagrama. A facilidade de análise que ele traz só passa a ser realmente compreendida à medida que começarmos a visualizar exemplos e a utilizá-lo em nosso dia-a-dia. Obrigado pela ajuda!
      `,
  },
  {
    title: "Observação e Diagnóstico",
    abstract:
      "À primeira vista o Business Model Canvas parece um simples diagrama. A facilidade de análise que ele traz só passa.",
    text: `
      TEXTO 5
      
      À primeira vista o Business Model Canvas parece um simples diagrama.

      À primeira vista o Business Model Canvas parece um simples diagrama. A facilidade de análise que ele traz só passa a ser realmente compreendida à medida que começarmos a visualizar exemplos e a utilizá-lo em nosso dia-a-dia. Obrigado pela ajuda!
      `,
  },
  {
    title: "Análise da Atividade Empreendedora",
    abstract:
      "À primeira vista o Business Model Canvas parece um simples diagrama. A facilidade de análise que ele traz só passa.",
    text: `
      TEXTO 6
      
      À primeira vista o Business Model Canvas parece um simples diagrama.

      À primeira vista o Business Model Canvas parece um simples diagrama. A facilidade de análise que ele traz só passa a ser realmente compreendida à medida que começarmos a visualizar exemplos e a utilizá-lo em nosso dia-a-dia. Obrigado pela ajuda!
      `,
  },
  {
    title: "Ferramentas importantes para melhoria de processos",
    abstract:
      "À primeira vista o Business Model Canvas parece um simples diagrama. A facilidade de análise que ele traz só passa.",
    text: `
      TEXTO 7
      
      À primeira vista o Business Model Canvas parece um simples diagrama.

      À primeira vista o Business Model Canvas parece um simples diagrama. A facilidade de análise que ele traz só passa a ser realmente compreendida à medida que começarmos a visualizar exemplos e a utilizá-lo em nosso dia-a-dia. Obrigado pela ajuda!
      `,
  },
  {
    title: "Ativos intangíveis",
    abstract:
      "À primeira vista o Business Model Canvas parece um simples diagrama. A facilidade de análise que ele traz só passa.",
    text: `
      TEXTO 8
      
      À primeira vista o Business Model Canvas parece um simples diagrama.

      À primeira vista o Business Model Canvas parece um simples diagrama. A facilidade de análise que ele traz só passa a ser realmente compreendida à medida que começarmos a visualizar exemplos e a utilizá-lo em nosso dia-a-dia. Obrigado pela ajuda!
      `,
  },
];

export const EntrepreneurialActivity = () => {
  return (
    <Container>
      <div id="entrepreneurial-activity">
        <SectionHeader
          title={"Esse é o pontapé inicial para criação da sua empresa 🙂"}
          description={""}
        />
        <div className="contentContainerCard">
          {texts.map((text, index) => {
            return (
              <EntrepreneurialCard
                title={text.title}
                abstract={text.abstract}
                text={text.text}
                key={index}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
};
