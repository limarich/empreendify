import React from "react";
import "./styles.css";

import { SectionHeader } from "../../components/SectionHeader";
import { ProgressCard } from '../../components/ProgressCard';

export const forms = [
  {
    title: "Sumário Executivo",
    description: "Organize as principais definições do seu negócio!",
    totalPages: 10,
    completedPages: 1,
    pages: [
      [
        {
          textareaQuestion: "Descrição do que é o negócio?",
        },
        {
          textareaQuestion: "Quais os principais produtos e/ou serviços?",
        },
        {
          inputQuestion: "Qual o montante de capital a ser investido?",
          symbol: "R$",
        },
      ],
      [
        {
          textareaQuestion: "Descrição do que é o negócio?",
        },
        {
          textareaQuestion: "Quais os principais produtos e/ou serviços?",
        },
        {
          inputQuestion: "Qual o montante de capital a ser investido?",
          symbol: "R$",
        },
      ],
    ]
  },
  {
    title: "Análise de Mercado",
    description: "Identifique quem são seus fornecedores, clientes e consumidores!",
    totalPages: 10,
    completedPages: 2,
    pages: [],
  },
  {
    title: "Plano de Marketing",
    description: "Defina as melhores estratégias para alcançar os seus clientes!",
    totalPages: 10,
    completedPages: 3,
    pages: [],
  },
  {
    title: "Processo Operacional",
    description: "Descreva seu processo de Produção!",
    totalPages: 10,
    completedPages: 4,
    pages: [],
  },
  {
    title: "Análise Financeira",
    description: "Vamos falar de finanças! Entenda o valor do seu produto ou serviço!",
    totalPages: 10,
    completedPages: 5,
    pages: [],
  },
  {
    title: "Construção de cenário",
    description: "Simule situações que podem deixar a sua empresa em situação desfavorável!",
    totalPages: 10,
    completedPages: 6,
    pages: [],
  }
]

export const BusinessPlan = () => {
  return (
    <div id="businessPlan">
      <SectionHeader 
        title={"Olá Viviani! Esse é o seu Plano de Negócios 🙂"}
        description={
          "Você precisa finalizar o preenchimento das seguintes etapas do seu plano de négocios"
        }
      />
      <div className="containerProgressCard">
        <div className="contentContainerProgressCard">
          {
            forms.map((form, index) => {
              return(
                <ProgressCard
                  title={form.title}
                  description={form.description}
                  index={index}
                  key={index}
                  totalPages={form.totalPages}
                  completedPages={form.completedPages}
                />
              )
            })
          }
        </div>
      </div>
    </div>
  );
};
