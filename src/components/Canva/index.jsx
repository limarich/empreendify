import { CaretLeft, CaretRight, Lightbulb } from "@phosphor-icons/react";
import "./styles.css";
import { HintModal } from "../HintModal";
import { useState } from "react";

const businessModelStep = [
  {
    title: "Proposta de Valor",
    description:
      "Quais beneficios seu produto (ou serviço) entrega para seus clientes?",
    tag: "what",
    label: "O que?",
    hints: [
      "dica 1",
      "dica 1.1",
      "dica 1.2",
      "dica 1.3",
      "dica 1.4",
      "dica 1.5",
    ],
  },
  {
    title: "Fonte de Receitas",
    description:
      "Por quais maneiras o cliente pagará pelos benefícios recebidos?",
    tag: "how-much",
    label: "Quanto?",
    hints: [
      "dica 2",
      "dica 2.1",
      "dica 2.2",
      "dica 2.3",
      "dica 2.4",
      "dica 2.5",
    ],
  },
  {
    title: "Canais",
    description:
      "Caminhos pelos quais a empresa comunica e entrega valor para o cliente.",
    tag: "to-whom",
    label: "Para Quem?",
    hints: [
      "dica 3",
      "dica 3.1",
      "dica 3.2",
      "dica 3.3",
      "dica 3.4",
      "dica 3.5",
    ],
  },
  {
    title: "Relacionamento com Clientes",
    description:
      "Estratégias que evitam que seus clientes corram para o concorrente.",
    tag: "to-whom",
    label: "Para Quem?",
    hints: [
      "dica 4",
      "dica 4.1",
      "dica 4.2",
      "dica 4.3",
      "dica 4.4",
      "dica 4.5",
    ],
  },

  {
    title: "Recursos Chave",
    description: "Quais os ativos fundamentais para fazer o negócio funcionar?",
    tag: "how",
    label: "Como?",
    hints: [
      "dica 5",
      "dica 5.1",
      "dica 5.2",
      "dica 5.3",
      "dica 5.4",
      "dica 5.5",
    ],
  },

  {
    title: "Parceiros Chave",
    description: "Quem são os seus principais fornecedores (terceirizados)?",
    tag: "how",
    label: "Como?",
    hints: [
      "dica 6",
      "dica 6.1",
      "dica 6.2",
      "dica 6.3",
      "dica 6.4",
      "dica 6.5",
    ],
  },

  {
    title: "Atividades Chave",

    description: "Quais atividades mais importantes  para o seu negócio ?",
    tag: "how",
    label: "Como?",
    hints: ["dica 1", "dica 2", "dica 3"],
  },

  {
    title: "Estrutura de Custo",
    description:
      "Quais os principais custos que têm peso no financeiro e são derivados da operacionalização do negócio?",
    tag: "how-much",
    label: "Quanto?",
    hints: ["dica 1", "dica 2", "dica 3"],
  },

  {
    title: "Segmento de Mercado",
    description: "É necessário que você defina um nicho de clientes.",
    tag: "to-whom",
    label: "Para Quem?",
    hints: ["dica 1", "dica 2", "dica 3"],
  },
];

export const Canva = ({ step, setStep }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div class="canva-container">
      <HintModal
        hints={businessModelStep[step].hints}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <button
        class="btn"
        id="previous"
        disabled={step === 0}
        onClick={() => {
          if (step - 1 >= 0) setStep(step - 1);
        }}
      >
        <CaretLeft size={32} color="#fff" style={{ position: "absolute" }} />
      </button>
      <div class="canva">
        <div class="canva-content">
          <div class="canva-header">
            <div class={`canva-tag ${businessModelStep[step].tag}`}>
              {businessModelStep[step].label}
            </div>
            <div class="canva-hint-icon" onClick={() => setIsOpen(true)}>
              <Lightbulb
                size={32}
                color="#000"
                style={{ position: "absolute" }}
              />
            </div>
          </div>
          <div class="canva-title">{businessModelStep[step].title}</div>
          <div class="canva-description">
            {businessModelStep[step].description}
          </div>
          <textarea class="canva-input"></textarea>
        </div>
      </div>
      <button
        class="btn"
        id="next"
        disabled={step === 8}
        onClick={() => {
          if (step + 1 <= 8) setStep(step + 1);
        }}
      >
        <CaretRight size={32} color="#fff" style={{ position: "absolute" }} />
      </button>
    </div>
  );
};
