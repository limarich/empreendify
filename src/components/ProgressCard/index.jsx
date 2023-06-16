import React from "react";
import "./styles.css";

export const ProgressCard = ({ title, description}) => {
  return (
    <div className="container">
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