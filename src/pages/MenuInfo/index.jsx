import { MenuOption } from "../../components/MenuOption";
import "./styles.css";

import img1 from "../../assets/card-img1.png";
import img2 from "../../assets/card-img2.png";
import img3 from "../../assets/card-img3.png";
import { Container } from "../../components/Container";

const menuOptions = [
  {
    title: "O que é empreender",
    description:
      "À primeira vista o Business Model Canvas parece um simples diagrama. A facilidade de análise que ele traz só passa a ser realmente compreendida à medida que começarmos a visualizar exemplos e a utilizá-lo em nosso dia-a-dia.",
    img_url: img1,
  },
  {
    title: "O que é empreender",
    description:
      "À primeira vista o Business Model Canvas parece um simples diagrama. A facilidade de análise que ele traz só passa a ser realmente compreendida à medida que começarmos a visualizar exemplos e a utilizá-lo em nosso dia-a-dia.",
    img_url: img2,
  },
  {
    title: "O que é empreender",
    description:
      "À primeira vista o Business Model Canvas parece um simples diagrama. A facilidade de análise que ele traz só passa a ser realmente compreendida à medida que começarmos a visualizar exemplos e a utilizá-lo em nosso dia-a-dia.",
    img_url: img3,
  },
];

export const MenuInfo = () => {
  return (
    <Container>
      <div className="menu-info">
        {menuOptions.map((option, index) => (
          <MenuOption
            key={index}
            title={option.title}
            description={option.description}
            img_url={option.img_url}
          />
        ))}
      </div>
    </Container>
  );
};
