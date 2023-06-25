import React from "react";
import "./styles.css";

import { SectionHeader } from '../../components/SectionHeader';
import { EntrepreneurialCard } from './EntrepreneurialCard';

export const texts = [
  {
    title: "Análise da atividade empreendedora",
    abstract: "À primeira vista o Business Model Canvas parece um simples diagrama. A facilidade de análise que ele traz só passa.",
    text: "Texto 1"
  },
  {
    title: "Quais os setores funcionais da empresa?",
    abstract: "À primeira vista o Business Model Canvas parece um simples diagrama. A facilidade de análise que ele traz só passa.",
    text: "Texto 2"
  },
  {
    title: "Entrevista com os coordenadores de cada setor",
    abstract: "À primeira vista o Business Model Canvas parece um simples diagrama. A facilidade de análise que ele traz só passa.",
    text: "Texto 3"
  },
  {
    title: "Quais os principais problemas pós observação e diagnóstico?",
    abstract: "À primeira vista o Business Model Canvas parece um simples diagrama. A facilidade de análise que ele traz só passa.",
    text: "Texto 4"
  },
  {
    title: "Observação e Diagnóstico",
    abstract: "À primeira vista o Business Model Canvas parece um simples diagrama. A facilidade de análise que ele traz só passa.",
    text: "Texto 5"
  },
  {
    title: "Análise da Atividade Empreendedora",
    abstract: "À primeira vista o Business Model Canvas parece um simples diagrama. A facilidade de análise que ele traz só passa.",
    text: "Texto 6"
  },
  {
    title: "Ferramentas importantes para melhoria de processos",
    abstract: "À primeira vista o Business Model Canvas parece um simples diagrama. A facilidade de análise que ele traz só passa.",
    text: "Texto 7"
  },
  {
    title: "Ativos intangíveis",
    abstract: "À primeira vista o Business Model Canvas parece um simples diagrama. A facilidade de análise que ele traz só passa.",
    text: "Texto 8"
  },
];

export const EntrepreneurialActivity = () => {
  return (
    <div id="entrepreneurial-activity">
      <SectionHeader 
        title={"Esse é o pontapé inicial para criação da sua empresa 🙂"}
        description={""}
      />
      <div className="contentContainerCard">
        {
          texts.map((text, index) => {
            return(
              <EntrepreneurialCard
                title={text.title}
                abstract={text.abstract}
                text={text.text}

                key={index}
                index={index}
              />
            )
          }) 
        }
      </div>
    </div>
  )
}