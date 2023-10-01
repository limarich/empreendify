import React from "react";
import { useNavigate } from "react-router-dom";

import "./styles.css";

export const ProgressCard = ({ 
  index, title, description, totalPages, completedPages
}) => {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate(
      `/business-plan/${index}`, 
      { state: { completedPages: completedPages } }
    );
  }

  return (
    <div
      className="container"
      onClick={handleNavigate}
    >
      <h4>{title}</h4>
      <p className="descriptionText">{description}</p>
      <div className="progressContainer">
        <div className="progressHeader">
          <p className="progressText">Progresso</p>
          <p className="progressNumber">{`${completedPages}/${totalPages}`}</p>
        </div>
        <div className="relativeContainer">
          <div className="not-progress-bar"></div>
          <div 
            className="progress-bar"
            style={{ width:
              `${Number(completedPages) / Number(totalPages) * 100}%` 
            }}
          >
          </div>
        </div>
      </div>
    </div>
  );
};
