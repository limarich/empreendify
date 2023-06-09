import { EditableList } from "../../components/EditableList";
import { SectionHeader } from "../../components/SectionHeader";

import "./styles.css";

export const Swot = () => {
  return (
    <section id="swot">
      <SectionHeader
        title="Análise SWOT 🙂"
        description="A análise SWOT (Strenghts, Weakness, Opportunities, Threats) é uma técnica de planejamento estratégico que ajuda a identificar os pontos fortes, fraquezas, oportunidades e ameaças de uma empresa ou projeto."
      />

      <div className="legend">
        <span>
          <b style={{ backgroundColor: "#5EA4E4" }}></b>Fatores Positivos
        </span>
        <span>
          <b style={{ backgroundColor: "#E45E5E" }}></b>Fatores Negativos
        </span>
      </div>

      <div className="list-container">
        <div className="list-row">
          <div className="header">Ambiente Interno</div>
          <div className="content">
            <EditableList tag="Forças" />
            <EditableList tag="Fraquezas" second />
          </div>
        </div>
        <div className="list-row">
          <div className="header">Ambiente Externo</div>
          <div className="content">
            <EditableList tag="Oportunidades" />
            <EditableList tag="Ameaças" second />
          </div>
        </div>
      </div>
    </section>
  );
};
