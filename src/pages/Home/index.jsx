import { MenuCard } from "../../components/MenuCard";
import "./styles.css";
// assets
import imageCard1 from "../../assets/card-image-1.png";
import imageCard2 from "../../assets/card-image-2.png";
const options = [
  {
    img: imageCard1,
    title: "Como criar sua empresa?",
    description:
      "Entenda as etapas mais importantes para a criação de um novo negócio.",
    url: "/menu-info",
  },
  {
    img: imageCard2,
    title: "Sua atividade Empreendedora",
    description:
      "faça uma análise da sua atividade empreendedora e tenha mais clareza sobre o seu negócio.",
    url: "/menu-info",
  },
];
export const Home = () => {
  return (
    <section id="home">
      <div className="welcome-message">
        <h1>
          Olá, Vivianni! Bem vindo(a) de volta! <span>✋</span>
        </h1>
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod .
        </h2>
      </div>
      <div className="menu-card-options">
        {options &&
          options.map((option, index) => (
            <MenuCard
              key={index}
              img={option.img}
              title={option.title}
              description={option.description}
              url={option.url}
            />
          ))}
      </div>
    </section>
  );
};
