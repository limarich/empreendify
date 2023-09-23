import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./styles.css";

import logo from "../../assets/logo-empreendify.png";

import img1 from "../../assets/logos/AnaliseSWOT.svg";
import img2 from "../../assets/logos/PlanoDeAcao.svg";
import img3 from "../../assets/logos/ModeloDeNegocios.svg";
import img4 from "../../assets/logos/PlanoDeNegocios.svg";
import img5 from "../../assets/logos/SaibaMais.svg";
import img6 from "../../assets/logos/AtividadeEmpreendedora.svg";

const imagesForNavigation = [
  img1, img2, img3, img4, img5, img6
];
const navigationLinks = [
  "/swot",
  "/action-plan",
  "/business-model",
  "/business-plan",
  "/home",
  "/entrepreneurial-activity"
];
const namesForDescription = [
  "Análise SWOT",
  "Plano de ação: 5W2H",
  "Modelo de Negócios",
  "Plano de Negócios",
  "Saiba Mais",
  "Atividade Empreendedora"
]

export const Navbar = ({ referenceTo }) => {
  const [selectedIndex, setSelectedIndex] = useState(referenceTo);
  const navigate = useNavigate();

  const handleItemClick = (index) => {
    console.log(index);
    setSelectedIndex(index);

    navigate(navigationLinks[index]);
  }

  return (
    <header className="headerNavBar">
      <div className="logoContainer" onClick={() => navigate("/")}>
        <img className="logoImage" src={logo} alt="logo" />
      </div>
      <ul className="navUnorderedList">
        {
          navigationLinks.map((item, index) => {
            return(
              <li
                key={index}
                className="navigationLi"
                onClick={() => {
                  handleItemClick(index);
                }}
                style={
                  index === selectedIndex
                  ? {
                      backgroundColor: 'var(--normal-gray-2)',
                      color: 'var(--normal-blue)'
                    }
                  : {}  
                }
              >
                <img 
                  className="logosImage" 
                  src={imagesForNavigation[index]} 
                  alt="INavigationImage"
                />
                <p>{namesForDescription[index]}</p>
              </li>
            );
          })
        }
      </ul>
    </header>
  );
};
