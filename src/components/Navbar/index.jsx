import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./styles.css";

import logo from "../../assets/logo-empreendify.png";

import img1 from "../../assets/logos/AnaliseSWOT.svg";
import img2 from "../../assets/logos/PlanoDeAcao.svg";
import img3 from "../../assets/logos/ModeloDeNegocios.svg";
import img4 from "../../assets/logos/PlanoDeNegocios.svg";
import img5 from "../../assets/logos/SaibaMais.svg";
import img6 from "../../assets/logos/AtividadeEmpreendedora.svg";

const navigationLinks = [
  {

  }
]

export const Navbar = () => {
  const [selectedIndex, setSelectedIndex] = useState(4);

  useEffect(() => {
    let lis = document.querySelectorAll(".navigation-li");
    lis.forEach((li) => {
      li.style.background = "transparent";
      li.style.color = "#1E1E1E";
    });
    
    lis[selectedIndex].style.background = "#A7CDF033";
    lis[selectedIndex].style.color = "#5EA4E4";

  }, [selectedIndex]);

  const navigate = useNavigate();
  const location = useLocation();
  if (location.pathname === "/") return null;
  return (
    <header>
      <div className="logo" onClick={() => navigate("/")}>
        <img src={logo} alt="logo" />
      </div>
      <ul>
        <li
          className="navigation-li"
          onClick={() => {
            navigate("/swot");
            setSelectedIndex(0);
          }}
        >
          <img className="logosImage" src={img1} alt=""
          />
          <p>Análise SWOT</p>
        </li>
        <li 
          className="navigation-li"
          onClick={() => {
            navigate("/action-plain");
            setSelectedIndex(1);
          }}
        >
          <img className="logosImage" src={img2} alt=""
          />
          <p>Plano de ação: 5W2H</p>
        </li>
        <li
          className="navigation-li"
          onClick={() => {
            navigate("/business-model");
            setSelectedIndex(2);
          }}
        >
          <img className="logosImage" src={img3} alt="" />
          <p>Modelo de Negócios</p>
        </li>
        <li
          className="navigation-li"
          onClick={() => {
            navigate("/business-plan");
            setSelectedIndex(3);
          }}
        >
          <img className="logosImage" src={img4} alt="" />
          <p>Plano de Negócios</p>
        </li>
        <li
          className="navigation-li"
          onClick={() => {
            navigate("/home");
            setSelectedIndex(4);
          }}
        >
          <img className="logosImage" src={img5} alt="" />
          <p>Saiba Mais</p>
        </li>
        <li
          className="navigation-li"
          onClick={() => {
            navigate("/entrepreneurial-activity");
            setSelectedIndex(5);
          }}
        >
          <img className="logosImage" src={img6} alt="" />
          <p>Atividade Empreendedora</p>
        </li>
      </ul>
    </header>
  );
};
