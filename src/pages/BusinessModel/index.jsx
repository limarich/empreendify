import { useState } from "react";
import { ProgressBar } from "../../components/ProgressBar";
import "./styles.css";
import { Canva } from "../../components/Canva";

import { useLocation } from 'react-router-dom';

export const BusinessModel = () => {
  const [step, setStep] = useState(0);
  const [enableHint, setEnableHint] = useState(false);

  const location = useLocation();
  const { finishedBusinessModel } = location;

  // Redirecionamento do modelo de negócios preenchido!
  if(finishedBusinessModel == true) {
    return(
      <div></div>
    )
  }

  // Redirecionametno do modelo de negócios não-preenchido!
  return (
    <div id="business-model">
      <div className="business-model-container">
        <h1>Modelo de Negócios</h1>
        <ProgressBar enableHint={enableHint} active={step} setActive={setStep} />
        <Canva 
          enableHint={enableHint} 
          setEnableHint={setEnableHint}

          step={step} 
          setStep={setStep} 
        />
      </div>
    </div>
  );
};
