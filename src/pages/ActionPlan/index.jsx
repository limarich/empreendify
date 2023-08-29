import React, { useEffect, useState } from "react";
import { EditableRow } from "../../components/EditableRow";
import { SectionHeader } from "../../components/SectionHeader";

import "./styles.css";

import trashIcon from "../../assets/logos/TrashSimple.svg";
import trashIconHovered from "../../assets/logos/TrashSimpleFilled.svg";
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
  const [isHovered, setIsHovered] = useState(false);

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
    <Container>
      <section id="action-plan">
        <SectionHeader
          title="Plano de ação 5W2H "
          description="O plano 5W2H é uma metodologia de planejamento e gestão de projetos que ajuda a identificar e definir as necessidades e objetivos de um projeto.  Ajuda a identificar recursos, etapas e responsabilidades para alcançar os objetivos do projeto."
        />

        <div
          className="editable-rows"
          onMouseEnter={() => handleMouseEnter(index)}
        >
          {planItems.map((item, index) => (
            <div
              style={{
                display: "flex",
                position: "relative",
              }}
            >
              {index == indexOfHoveredItem && (
                <a
                  href="#"
                  className="linkReference"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  onClick={(index) => handleDeleteEditableRow(index)}
                >
                  <img
                    className="trash-icon"
                    alt="Trash Icon"
                    src={isHovered ? trashIconHovered : trashIcon}
                  />
                </a>
              )}

              <EditableRow
                onStateChange={handleChildStateChange}
                key={index}
                index={index}
                showHeader={true}
              />
            </div>
          ))}
        </div>

        <button onClick={() => setplanItems([...planItems, initialState])}>
          Nova linha +
        </button>
      </section>
    </Container>
  );
};
