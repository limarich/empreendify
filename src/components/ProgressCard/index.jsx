import React from "react";
import { useNavigate } from "react-router-dom";

import "./styles.css";

export const ProgressCard = ({ index, title, description}) => {
  const navigate = useNavigate();

  return (
    <div
      className="container"
      onClick={() => navigate("/form", { formIndex: index })}
    >
      <h4>{title}</h4>
      <p className="descriptionText">{description}</p>
      <div className="progressContainer">
        <div className="progressHeader">
          <p className="progressText">Progresso</p>
          <p className="progressNumber">6/10</p>
        </div>
        <div className="relativeContainer">
          <div className="not-progress-bar"></div>
          <div className="progress-bar"></div>
        </div>
      </div>
    </div>
  );
};
