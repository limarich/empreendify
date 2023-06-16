import React from "react";
import "./styles.css";

import { SectionHeader } from "../../components/SectionHeader";
import { ProgressCard } from '../../components/ProgressCard';

export const BusinessPlan = () => {
  return (
    <div id="businessPlan">
      <SectionHeader 
        title={"Olá Viviani! Esse é o seu Plano de Negócios 🙂"}
        description={
          "Você precisa finalizar o preenchimento das seguintes etapas do seu plano de négocios"
        }
      />
      <div className="containerProgressCard">
        <div className="contentContainerProgressCard">
          <ProgressCard
            title={"Sumário Executivo"}
            description={"Organize as principais definições do seu negócio!"}
          />
          <ProgressCard
            title={"Sumário Executivo"}
            description={"Organize as principais definições do seu negócio!"}
          />
          <ProgressCard
            title={"Sumário Executivo"}
            description={"Organize as principais definições do seu negócio!"}
          />
          <ProgressCard
            title={"Sumário Executivo"}
            description={"Organize as principais definições do seu negócio!"}
          />
          <ProgressCard
            title={"Sumário Executivo"}
            description={"Organize as principais definições do seu negócio!"}
          />
          <ProgressCard
            title={"Sumário Executivo"}
            description={"Organize as principais definições do seu negócio!"}
          />
        </div>
      </div>
    </div>
  );
};
