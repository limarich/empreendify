import { MenuCard } from "../../components/MenuCard";
import "./styles.css";
// assets
import imageCard1 from "../../assets/card-img1.png";
import imageCard2 from "../../assets/card-img2.png";
const options = [
  {
    img: imageCard2,
    title: "O que é empreender?",
    description:
      "À primeira vista o Business Model Canvas parece um simples diagrama. A facilidade de análise que ele traz só passa a ser realmente compreendida à medida que começarmos a visualizar exemplos e a utilizá-lo em nosso dia-a-dia.",
    url: "/menu-action",
  },
  {
    img: imageCard2,
    title: "Sua atividade Empreendedora",
    description:
      "faça uma análise da sua atividade empreendedora e tenha mais clareza sobre o seu negócio.",
    url: "/menu-action",
  },
];
export const Home = () => {
  return (
    <section id="home">
      <div className="welcome-message">
        <h1>
          Esse é o pontapé inicial para criação da sua empresa <span>🙂</span>
        </h1>
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
