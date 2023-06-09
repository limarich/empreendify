import { useState } from "react";
import "./styles.css";

const steps = [
  "Proposta de Valor",
  "Fonte de Receitas",
  "Canais",
  "Relacionamento com clientes",
  "Recursos chave",
  "Atividades chave",
  "Parceiros chave",
  "Estrutura de custo",
  "Segmento de mercado",
];

export const ProgressBar = ({ active = 3, setActive }) => {

  const [progressFlexWidth, setProgressFlexWidth] = useState(0);

  return (
    <div className="progress-container">
      <div
        className="progress"
      >
        <div className="progress-item"
          style={{ flex: progressFlexWidth }}
        ></div>
        <div className="notProgress-item"
          style={{ flex: 1 - progressFlexWidth }}
        ></div>
      </div>

      <div className="steps-container">
      {
        steps.map((step, index) => (
          <div
            className="step"
            key={step}
            onClick={() => {
              setActive(index);
              setProgressFlexWidth((1 / (steps.length - 1)) * index);
            }}
          >
            <div className={`circle ${active >= index && "active"}`}>
              {index + 1}
            </div>
            <div className="label">{step}</div>
          </div>
        ))
      }
      </div>
    </div>
  );
};
