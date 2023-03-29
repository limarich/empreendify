import { EditableList } from "../../components/EditableList";
import { SectionHeader } from "../../components/SectionHeader";

export const Swot = () => {
  return (
    <section id="swot">
      <SectionHeader
        title="Análise SWOT "
        description="A análise SWOT (Strenghts, Weakness, Opportunities, Threats) é uma técnica de planejamento estratégico que ajuda a identificar os pontos fortes, fraquezas, oportunidades e ameaças de uma empresa ou projeto.  Ajuda a identificar as vantagens e desvantagens internas e externas da empresa, e a encontrar oportunidades para o crescimento e melhoria."
      />
      <EditableList />
      <EditableList />
      <EditableList />
      <EditableList />
    </section>
  );
};
