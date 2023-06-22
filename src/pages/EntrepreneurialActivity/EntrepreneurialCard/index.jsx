import React from "react";
import { useNavigate } from "react-router-dom";

import "./styles.css";

export const EntrepreneurialCard = () => {
  const navigate = useNavigate();

  return (
    <div className="contentCard">
      <h3 className="title">Análise da Atividade Empreendedora</h3>
      <p className="description">À primeira vista o Business Model Canvas parece um simples diagrama. A facilidade de análise que ele traz só passa.</p>
      <button 
        className="link" 
        href="#"
        onClick={() => {
          navigate('/entrepreneurial-text')
        }}
      >
        Saiba Mais
      </button>
    </div>
  )
}