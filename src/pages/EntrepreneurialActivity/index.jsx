import React from "react";
import "./styles.css";

import { SectionHeader } from '../../components/SectionHeader';
import { EntrepreneurialCard } from './EntrepreneurialCard';

export const EntrepreneurialActivity = () => {
  return (
    <div id="entrepreneurial-activity">
      <SectionHeader 
        title={"Esse é o pontapé inicial para criação da sua empresa 🙂"}
        description={""}
      />
      <div className="contentContainerCard">
        <EntrepreneurialCard />
        <EntrepreneurialCard />
        <EntrepreneurialCard />
        <EntrepreneurialCard />
        <EntrepreneurialCard />
        <EntrepreneurialCard />
        <EntrepreneurialCard />
        <EntrepreneurialCard />
      </div>
    </div>
  )
}