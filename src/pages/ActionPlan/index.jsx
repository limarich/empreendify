import React, { useEffect, useState } from "react";
import { EditableRow } from "../../components/EditableRow";
import { SectionHeader } from "../../components/SectionHeader";
import {
  getActionPlanController,
  updateActionPlanController,
} from "./controller";
import { getUserData } from "../../utils/getUserData";

import "./styles.css";

import { Container } from "../../components/Container";

export const ActionPlan = () => {
  // Controle de estado do contéudo escrito
  const initialState = {
    what: "",
    why: "",
    who: "",
    when: "",
    where: "",
    how: "",
    howMuch: "",
  };

  const [planItems, setplanItems] = useState([initialState]);
  const [businessId, setBusinessId] = useState("");

  const handleChildStateChange = (newState, index) => {
    let array = [...planItems];
    array[index] = newState;
    setplanItems([...array]);
  };

  const handleDeleteEditableRow = (index) => {
    let array = [...planItems];
    array.splice(index, 1);
    setplanItems([...array]);
  };

  const handleSave = async () => {
    const formattedItems = planItems.map((item) => ({
      ...item,
      actionPlanId: "",
    }));
    await updateActionPlanController({
      businessId,
      items: formattedItems,
    });
  };
  const fetchActionPlan = async () => {
    const userData = getUserData();
    if (userData && userData.user && userData.user.businesses) {
      const res = await getActionPlanController(userData.user.businesses[0].id);
      if (res && res.actionPlan) {
        setplanItems(res.actionPlan.items);
        setBusinessId(res.actionPlan.businessId);
      }
    }
  };
  useEffect(() => {
    fetchActionPlan();
  }, []);
  return (
    <Container referenceTo={1}>
      <section id="action-plan">
        <div className="sectionPadding">
          <SectionHeader
            title="Plano de ação 5W2H "
            description="O plano 5W2H é uma metodologia de planejamento e gestão de projetos que ajuda a identificar e definir as necessidades e objetivos de um projeto.  Ajuda a identificar recursos, etapas e responsabilidades para alcançar os objetivos do projeto."
          />
        </div>

        <div className="editable-rows">
          {planItems.map((values, index) => {
            return (
              <EditableRow
                key={index}
                index={index}
                showHeader={true}
                state={values}
                handleChildStateChange={handleChildStateChange}
                handleDeleteEditableRow={() => handleDeleteEditableRow(index)}
              />
            );
          })}
        </div>

        <button
          className="editableRowButton"
          onClick={() => setplanItems([...planItems, initialState])}
        >
          Nova linha +
        </button>
        <button className="saveButton" onClick={handleSave}>
          Salvar
        </button>
      </section>
    </Container>
  );
};
