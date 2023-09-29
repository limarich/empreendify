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

  const handleChildStateChange = (newState, index) => {
    let array = [...planItems];
    array[index] = newState;
    setplanItems([...array]);

    console.log(array);
  };
  
  const handleDeleteEditableRow = (index) => {
    let array = [...planItems];
    array.splice(index, 1);
    setplanItems([...array]);
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
            planItems.map((values, index) => {
              return (
                <EditableRow
                  key={index}
                  index={index}

                  showHeader={true}

                  state={values}
                  handleChildStateChange={handleChildStateChange}

                  handleDeleteEditableRow={() => handleDeleteEditableRow(index)}
                />
              )
            })
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
