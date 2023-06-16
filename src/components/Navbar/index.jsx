import { useLocation, useNavigate } from "react-router-dom";
import "./styles.css";

import logo from "../../assets/logo-empreendify.png";

import img1 from "../../assets/logos/AnaliseSWOT.svg";
import img2 from "../../assets/logos/PlanoDeAcao.svg";
import img3 from "../../assets/logos/ModeloDeNegocios.svg";
import img4 from "../../assets/logos/PlanoDeNegocios.svg";
import img5 from "../../assets/logos/SaibaMais.svg";
import img6 from "../../assets/logos/AtividadeEmpreendedora.svg";

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  if (location.pathname === "/") return null;
  return (
    <header>
      <div className="logo" onClick={() => navigate("/")}>
        <img src={logo} alt="logo" />
      </div>
      <ul>
        <li onClick={() => navigate("/swot")}>
          <img className="logosImage" src={img1} alt=""
          />
          <p>Análise SWOT</p>
        </li>
        <li onClick={() => navigate("/action-plain")}>
          <img className="logosImage" src={img2} alt=""
          />
          <p>Plano de ação: 5W2H</p>
        </li>
        <li onClick={() => navigate("/business-model")}>
          <img className="logosImage" src={img3} alt="" />
          <p>Modelo de Negócios</p>
        </li>
        <li onClick={() => navigate("/menu-info")}>
          <img className="logosImage" src={img4} alt="" />
          <p>Plano de Negócios</p>
        </li>
        <li onClick={() => navigate("/home")}>
          <img className="logosImage" src={img5} alt="" />
          <p>Saiba Mais</p>
        </li>
        <li onClick={() => navigate("/menu-action")}>
          <img className="logosImage" src={img6} alt="" />
          <p>Atividade Empreendedora</p>
        </li>
      </ul>
    </header>
  );
};
