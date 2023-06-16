import { MenuCard } from "../../components/MenuCard";
import "./styles.css";
// assets
import imageCard1 from "../../assets/card-img1.png";
import imageCard2 from "../../assets/card-img2.png";
import { SectionHeader } from "../../components/SectionHeader";

const options = [
  {
    img: imageCard1,
    title: "O que é empreender?",
    description:
      "À primeira vista o Business Model Canvas parece um simples diagrama. A facilidade de análise que ele traz só passa a ser realmente compreendida à medida que começarmos a visualizar exemplos e a utilizá-lo em nosso dia-a-dia.",
    url: "/blog",
  },
  {
    img: imageCard2,
    title: "O que é empreender?",
    description:
      "À primeira vista o Business Model Canvas parece um simples diagrama. A facilidade de análise que ele traz só passa a ser realmente compreendida à medida que começarmos a visualizar exemplos e a utilizá-lo em nosso dia-a-dia.",
    url: "/blog",
  },
];

export const Home = () => {
  return (
    <section id="home">
      <SectionHeader
        title={
          "Esse é o pontapé inicial para criação da sua empresa 🙂"
        }
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
        }
      />
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
