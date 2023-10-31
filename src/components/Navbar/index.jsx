import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./styles.css";

import logo from "../../assets/logo-empreendify.png";

import img0 from "../../assets/logos/CaretDown.svg";
import img1 from "../../assets/logos/PlanoDeAcao.svg";
import img2 from "../../assets/logos/AnaliseSWOT.svg";
import img3 from "../../assets/logos/ModeloDeNegocios.svg";
import img4 from "../../assets/logos/PlanoDeNegocios.svg";
import img5 from "../../assets/logos/AtividadeEmpreendedora.svg";
import img6 from "../../assets/logos/SaibaMais.svg";

import Gear from "../../assets/Gear.svg";

import NestedList from "../NestedList";

export const imagesForNavigation = [img0, img1, img2, img3, img4, img5, img6];
export const navigationLinks = [
  "#",
  "/action-plan",
  "/swot",
  "/business-model",
  "/business-plan",
  "/entrepreneurial-activity",
  "/home",
];
export const namesForDescription = [
  "Como criar sua empresa",
  "Plano de ação: 5W2H",
  "Análise SWOT",
  "Modelo de Negócios",
  "Plano de Negócios",
  "Atividade Empreendedora",
  "Saiba Mais",
];

export const Navbar = ({ referenceTo }) => {
  const [selectedIndex, setSelectedIndex] = useState(referenceTo);
  const navigate = useNavigate();

  function isNestOpen() {
    if (selectedIndex >= 1 || selectedIndex <= 4) {
      return true;
    }
    return false;
  }

  return (
    <header className="headerNavBar">
      <div className="logoContainer" onClick={() => navigate("/")}>
        <img className="logoImage" src={logo} alt="logo" />
      </div>
      <ul className="navUnorderedList">
        <NestedList selectedIndex={selectedIndex} isNestOpen={isNestOpen()} />
      </ul>
      <Link to={"/profile"}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <img src={Gear} alt="perfil" />
          Editar Perfil
        </div>
      </Link>
    </header>
  );
};
