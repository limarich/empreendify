import React from "react";
import "./styles.css";

import { SectionHeader } from "../../components/SectionHeader";
import { EntrepreneurialCard } from "./EntrepreneurialCard";
import { Container } from "../../components/Container";

export const texts = [
  {
    title: "Análise da atividade empreendedora",
    abstract:
      "O processo de análise empreendedora vai além do Business Model Canvas, explorando a fundo a interconexão entre inovação, estratégia e implementação para impulsionar o sucesso empresarial.",
    text: `
    A análise da atividade empreendedora requer uma compreensão profunda do modelo de negócios. O Business Model Canvas oferece uma representação visual clara dos principais aspectos, desde segmentos de clientes até fontes de receita. Sua utilização revela insights valiosos sobre como estruturar e desenvolver um empreendimento com sucesso.`,
  },
  {
    title: "Quais os setores funcionais da empresa?",
    abstract:
      "Identificar os setores funcionais é essencial para compreender a sinergia entre diferentes áreas de uma empresa. Este texto explora como o Business Model Canvas pode revelar a integração e a otimização desses setores.",
    text: `
    Identificar os setores funcionais de uma empresa é crucial para compreender sua dinâmica interna. O Business Model Canvas delineia claramente esses setores - como operações, marketing, recursos-chave - e como se interligam para impulsionar o funcionamento eficiente do negócio.  
    `,
  },
  {
    title: "Entrevista com os coordenadores de cada setor",
    abstract:
      "As entrevistas com coordenadores fornecem insights valiosos sobre desafios específicos enfrentados em áreas-chave da empresa. Este texto explora como esses insights se conectam à visão geral do Business Model Canvas.",
    text: `
    As entrevistas com coordenadores de setores são oportunidades para entender as complexidades individuais de cada área. Ao integrar suas percepções com a visão geral proporcionada pelo Business Model Canvas, é possível obter uma compreensão completa das necessidades e potenciais melhorias em cada setor.  
    `,
  },
  {
    title: "Quais os principais problemas pós observação e diagnóstico?",
    abstract:
      "A análise pós observação e diagnóstico identifica problemas cruciais que exigem atenção imediata. Este texto investiga como o Business Model Canvas pode ser usado para estruturar e resolver esses problemas.",
    text: `
    Após uma minuciosa observação e diagnóstico, é comum identificar problemas críticos que afetam o desempenho empresarial. O Business Model Canvas facilita a análise desses problemas, permitindo uma abordagem estratégica e direcionada para resolvê-los.  
    `,
  },
  {
    title: "Observação e Diagnóstico",
    abstract:
      "As etapas de observação e diagnóstico são fundamentais para identificar áreas de melhoria no funcionamento de um negócio. Este texto explora como o Business Model Canvas organiza e facilita esse processo.",
    text: `
    A observação minuciosa do funcionamento do negócio e um diagnóstico detalhado são fundamentais para aprimorar sua performance. Utilizando o Business Model Canvas, é possível estruturar e organizar as informações coletadas durante essas etapas para uma análise mais eficaz.  
    `,
  },
  {
    title: "Análise da Atividade Empreendedora",
    abstract:
      "A análise da atividade empreendedora é um processo complexo que transcende a simples avaliação de um plano de negócios.",
    text: `
    A análise da atividade empreendedora é um processo complexo que transcende a simples avaliação de um plano de negócios. Envolve uma profunda imersão na identificação, compreensão e exploração dos elementos essenciais que sustentam o tecido do empreendedorismo. Para além do Business Model Canvas, esta análise exige uma visão holística que permeia os alicerces da inovação, estratégia e execução.
    `,
  },
  {
    title: "Ferramentas importantes para melhoria de processos",
    abstract:
      "Além do Business Model Canvas, existem diversas ferramentas valiosas que contribuem para a melhoria contínua dos processos. Combinar várias abordagens e metodologias é fundamental para otimizar a operação e a gestão do negócio.",
    text: `
    Além do Business Model Canvas, existem diversas ferramentas valiosas que contribuem para a melhoria contínua dos processos. Combinar várias abordagens e metodologias é fundamental para otimizar a operação e a gestão do negócio.
    `,
  },
  {
    title: "Ativos intangíveis",
    abstract:
      "Os ativos intangíveis são pilares invisíveis que sustentam o valor de uma empresa. Este texto explora a importância estratégica desses ativos e como o Business Model Canvas pode destacar sua relevância.",
    text: `
    Os ativos intangíveis, muitas vezes esquecidos, desempenham um papel crucial na criação de valor de uma empresa. Identificar e gerenciar esses ativos é tão importante quanto cuidar dos recursos físicos, e o Business Model Canvas pode ajudar a visualizar sua relevância estratégica.
      `,
  },
];

export const EntrepreneurialActivity = () => {
  return (
    <Container referenceTo={5}>
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
