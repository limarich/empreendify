import React from "react";
import "./styles.css";

import { SectionHeader } from "../../components/SectionHeader";
import { ProgressCard } from "../../components/ProgressCard";
import { Container } from "../../components/Container";

import { useSelector, useDispatch } from "react-redux";

export const BusinessPlan = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const userName = "userData.user.name" ?? "";

  const dispatch = useDispatch();
  const result = useSelector((state) => {
    return state.calculator;
  });
  const forms = useSelector((state) => {
    return state.forms;
  });

  return (
    <Container referenceTo={4}>
      <div id="businessPlan">
        <SectionHeader
          title={`Olá ${userName}! Esse é o seu Plano de Negócios 🙂`}
          description={
            "Você precisa finalizar o preenchimento das seguintes etapas do seu plano de négocios"
          }
        />
        <div className="containerProgressCard">
          <div className="contentContainerProgressCard">
            {forms.map((form, index) => {
              return (
                <ProgressCard
                  title={form.title}
                  description={form.description}
                  index={index}
                  key={index}
                  totalPages={form.totalPages}
                  completedPages={form.completedPages}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
};
