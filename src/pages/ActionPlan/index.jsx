import React, { useEffect, useState } from "react";
import { EditableRow } from "../../components/EditableRow";
import { SectionHeader } from "../../components/SectionHeader";

import "./styles.css";

import { Container } from "../../components/Container";

export const ActionPlan = () => {
  // Controle de estado do contéudo escrito
  const initialState = {
    what: "",
    why: "",
    where: "",
    when: "",
    who: "",
    how: "",
    howMany: "",
    status: "",
  };

  const [planItems, setplanItems] = useState([initialState]);
  const [childState, setChildState] = useState("");

  const handleChildStateChange = (newState, index) => {
    setChildState(newState);

    let array = [...planItems];
    array[index] = childState;
    setplanItems([...array]);
  };

  // Apagar elementos
  const [indexOfHoveredItem, setIndexOfHoveredItem] = useState(0);

  const handleMouseEnter = (index) => {
    setIndexOfHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setIndexOfHoveredItem(null);
  };

  const handleDeleteEditableRow = (index) => {
    let array = [...planItems];
    array.splice(index, 1);
    setplanItems([...array]);

    setIsHovered(false);
  };

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
          {
            planItems.map((item, index) => (
              <EditableRow
                onStateChange={handleChildStateChange}
                key={index}
                index={index}
                showHeader={true}
                onMouseEnter={() => handleMouseEnter(index)}
              />
            ))
          }
        </div>

        <button
          className="editableRowButton"
          onClick={() => setplanItems([...planItems, initialState])}
        >
          Nova linha +
        </button>
      </section>
    </Container>
  );
};
