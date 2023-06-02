import React, { useState } from "react";
import { EditableRow } from "../../components/EditableRow";
import { SectionHeader } from "../../components/SectionHeader";

import "./styles.css";

import trashIcon from '../../assets/logos/TrashSimple.svg';

export const ActionPlain = () => {
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

  const [plainItems, setPlainItems] = useState([initialState]);
  const [indexOfHoveredItem, setIndexOfHoveredItem] = useState(0);

  return (
    <section id="action-plain">
      <SectionHeader
        title="Plano de ação 5W2H "
        description="O plano 5W2H é uma metodologia de planejamento e gestão de projetos que ajuda a identificar e definir as necessidades e objetivos de um projeto.  Ajuda a identificar recursos, etapas e responsabilidades para alcançar os objetivos do projeto."
      />

      {plainItems.map((item, index) => (
        <>
          {
            index == indexOfHoveredItem
            &&
              <a href="#">
                <img className="trash-icon" alt="Trash Icon" src={
                  trashIcon
                }
                />
              </a>
          }
          
          <div className="editable-rows">
            <EditableRow
              key={index}
              row={item}
              setPlainItems={setPlainItems}
              showHeader={true}
            />
          </div>
        </>
      ))}

      <button onClick={() => setPlainItems([...plainItems, initialState])}>
        Nova linha +
      </button>

    </section>
  );
};
