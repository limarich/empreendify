import React, { useState } from "react";
import { EditableRow } from "../../components/EditableRow";
import { SectionHeader } from "../../components/SectionHeader";

import "./styles.css";

export const ActionPlan = () => {
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
  return (
    <section id="action-plain">
      <SectionHeader
        title="Plano de ação 5W2H "
        description="O plano 5W2H é uma metodologia de planejamento e gestão de projetos que ajuda a identificar e definir as necessidades e objetivos de um projeto.  Ajuda a identificar recursos, etapas e responsabilidades para alcançar os objetivos do projeto."
      />
      <div className="editable-list">
        {plainItems.map((item, index) => (
          <EditableRow
            key={index}
            row={item}
            setPlainItems={setPlainItems}
            showHeader={index === 0}
          />
        ))}
        <button onClick={() => setPlainItems([...plainItems, initialState])}>
          Nova linha +
        </button>
      </div>
    </section>
  );
};
