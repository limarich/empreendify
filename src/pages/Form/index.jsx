import React from "react";
import { useNavigate } from "react-router-dom";

import "./styles.css";

const forms = [
  {
    title: "Sumário Executivo"
  },
  {
    title: "Análise de Mercado"
  },
  {
    title: "Plano de Marketing"
  },
  {
    title: "Processo Operacional"
  },
  {
    title: "Análise Financeira"
  },
  {
    title: "Construção de Cenário"
  },
]

export const Form = () => {
  const navigate = useNavigate();

  return (
    <div id="form-page">
      <div className="formHeader">
        <ul className="topics-list">
          <li className="topic-item">Sumário Executivo</li>
          <li className="topic-item">Análise de Mercado</li>
          <li className="topic-item">Plano de Marketing</li>
          <li className="topic-item">Processo Operacional</li>
          <li className="topic-item">Análise Financeira</li>
          <li className="topic-item">Construção de Cenário</li>
        </ul>
      </div>

      <div className="formContainer">
        <div className="formContentContainer">
          <h1 className="title">Sumário executivo</h1>
        </div>
      </div>
    </div>
  );
};
