import { MenuOption } from "../../components/MenuOption";
import "./styles.css";

import img1 from "../../assets/card-img1.png";
import img2 from "../../assets/card-img2.png";
import img3 from "../../assets/card-img3.png";

const menuOptions = [
  {
    title: "Plano de ação 5W2H",
    description:
      "O plano 5W2H é uma metodologia de planejamento e gestão de projetos que ajuda a identificar e definir as necessidades e objetivos de um projeto.  Ajuda a identificar recursos, etapas e responsabilidades para alcançar os objetivos do projeto.",
    img_url: img1,
    link: "/action-plain",
  },
  {
    title: "Análise SWOT",
    description:
      "A análise SWOT é uma técnica de planejamento estratégico que ajuda a identificar os pontos fortes, fraquezas, oportunidades e ameaças de uma empresa ou projeto.  Ajuda a identificar as vantagens e desvantagens internas e externas da empresa, e a encontrar oportunidades para o crescimento e melhoria.",
    img_url: img2,
    link: "/swot",
  },
  {
    title: "Modelo de Negócios",
    description:
      "O modelo de negócios é a estrutura que define como uma empresa gera receita e lucro. Ele descreve como a empresa planeja entregar valor para seus clientes, como ela irá se comunicar com eles, qual será sua estratégia de preços, quais são seus principais custos e fontes de receita.",
    img_url: img3,
    link: "/business-model",
  },
];

export const MenuAction = () => {
  return (
    <div className="menu-action">
      {menuOptions.map((option, index) => (
        <MenuOption
          key={index}
          title={option.title}
          description={option.description}
          img_url={option.img_url}
          link={option.link}
        />
      ))}
    </div>
  );
};
