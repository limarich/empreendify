import { useState } from "react";
import "./styles.css";

const steps = [
  "Proposta de Valor",
  "Fonte de Receita",
  "Canais",
  "Relacionamento",
  "Recursos chave",
  "Atividades chave",
  "Parcerias chave",
  "Estrutura de custos",
  "Cliente",
];

export const ProgressBar = ({ active = 0, setActive, enableHint }) => {
  console.log(enableHint);

  return (
    <div className="progress-container">
      <div className="progress">
        <div
          className="progress-item"
          style={{ flex: (1 / (steps.length - 1)) * active }}
        ></div>
        <div
          className="notProgress-item"
          style={{ flex: 1 - (1 / (steps.length - 1)) * active }}
        ></div>
      </div>

      <div className="steps-container">
        {steps.map((step, index) => (
          <div
            className="step"
            key={step}
            onClick={
              !enableHint
                ? () => {
                    setActive(index);
                  }
                : undefined
            }
          >
            <div className={`circle ${active >= index && "active"}`}>
              {index + 1}
            </div>
            <div className="label">{step}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
