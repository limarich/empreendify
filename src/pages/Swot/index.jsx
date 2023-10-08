import { useState } from "react";
import { Container } from "../../components/Container";
import { EditableList } from "../../components/EditableList";
import { SectionHeader } from "../../components/SectionHeader";
import { getUserData } from "../../utils/getUserData";

import "./styles.css";
import { getSwotController, updateSwotController } from "./controller";

export const Swot = () => {
  const [strengths, setStrengths] = useState([]);
  const [weaknesses, setWeaknesses] = useState([]);
  const [opportunities, setOpportunities] = useState([]);
  const [threats, setThreats] = useState([]);
  const [businessId, setBusinessId] = useState("");

  const fetchSwot = async () => {
    const userData = getUserData();
    if (userData && userData.businesses) {
      const res = await getSwotController(userData.businesses[0].id);
      if (res && res.swot) {
        const { swot } = res;
        setStrengths(swot.strengths);
        setThreats(swot.threats);
        setWeaknesses(swot.weaknesses);
        setOpportunities(swot.opportunities);
        setBusinessId(res.swot.businessId);
      }
    }
  };
  const handleUpdateSwot = async () => {
    await updateSwotController({
      businessId,
      opportunities,
      strengths,
      threats,
      weaknesses,
    });
  };
  useState(() => {
    fetchSwot();
  }, []);

  return (
    <Container referenceTo={2}>
      <section id="swot">
        <SectionHeader
          title="Análise SWOT 🙂"
          description="A análise SWOT (Strenghts, Weakness, Opportunities, Threats) é uma técnica de planejamento estratégico que ajuda a identificar os pontos fortes, fraquezas, oportunidades e ameaças de uma empresa ou projeto."
        />

        <div className="legend">
          <span>
            <b style={{ backgroundColor: "var(--normal-blue)" }}></b>Fatores
            Positivos
          </span>
          <span>
            <b style={{ backgroundColor: "var(--dark-red)" }}></b>Fatores
            Negativos
          </span>
        </div>

        <div className="list-container">
          <div className="list-row">
            <div className="header">Ambiente Interno</div>
            <div className="content">
              <EditableList
                tag="Forças"
                value={strengths}
                setValue={setStrengths}
              />
              <EditableList
                tag="Fraquezas"
                second
                value={weaknesses}
                setValue={setWeaknesses}
              />
            </div>
          </div>
          <div className="list-row">
            <div className="header">Ambiente Externo</div>
            <div className="content">
              <EditableList
                tag="Oportunidades"
                value={opportunities}
                setValue={setOpportunities}
              />
              <EditableList
                tag="Ameaças"
                second
                value={threats}
                setValue={setThreats}
              />
            </div>
            <button onClick={handleUpdateSwot}> Salvar</button>
          </div>
        </div>
      </section>
    </Container>
  );
};
