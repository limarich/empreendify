import { useState } from "react";
import "./styles.css";

import { ProgressBar } from "../../components/ProgressBar";
import { Canva } from "../../components/Canva";
import { SectionHeader } from "../../components/SectionHeader";

import { useLocation } from 'react-router-dom';
import { CanvaCard } from "../../components/CanvaCard";

export const BusinessModel = () => {
  const [step, setStep] = useState(0);
  const [enableHint, setEnableHint] = useState(false);

  const location = useLocation();
  const { finishedBusinessModel } = location;

  // Redirecionamento do modelo de negócios preenchido!
  if(true) {
    return(
      <div id="business-model">
        <SectionHeader 
          title={"Olá Viviani! Esse é o seu Modelo de Negócios 🙂"}
          description={""}
        />
        <div className="business-model-container">
          <div className="grid-container">

            <div className={`grid-item${1}`}>
              <CanvaCard />
            </div>
            <div className={`grid-item${2}`}>
              <CanvaCard />
            </div>
            <div className={`grid-item${3}`}>
              <CanvaCard />
            </div>
            <div className={`grid-item${4}`}>
              <CanvaCard />
            </div>
            <div className={`grid-item${5}`}>
              <CanvaCard />
            </div>
            <div className={`grid-item${6}`}>
              <CanvaCard />
            </div>
            <div className={`grid-item${7}`}>
              <CanvaCard />
            </div>
            <div className={`grid-item${8}`}>
              <CanvaCard />
            </div>
            <div className={`grid-item${9}`}>
              <CanvaCard />
            </div>

          </div>
        </div>
      </div>
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
