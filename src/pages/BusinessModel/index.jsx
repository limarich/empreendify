import { useState } from "react";
import { ProgressBar } from "../../components/ProgressBar";
import "./styles.css";
import { Canva } from "../../components/Canva";

export const BusinessModel = () => {
  const [step, setStep] = useState(0);

  return (
    <div className="business-model-container">
      <h1>Modelo de Negócios</h1>
      <ProgressBar active={step} setActive={setStep} />
      <Canva step={step} setStep={setStep} />
    </div>
  );
};
