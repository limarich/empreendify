import { MagnifyingGlass } from "@phosphor-icons/react";
import { useLocation, useNavigate } from "react-router-dom";
import "./styles.css";
import logo from "../../assets/logo-empreendify.png";

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  if (location.pathname === "/") return null;
  return (
    <header>
      <div className="logo" onClick={() => navigate("/")}>
        <img src={logo} alt="logo" />
        <h1>Empreendfy</h1>
      </div>
      <ul>
        <li>Serviços</li>
        <li>Sobre</li>
        <li>Contato</li>
      </ul>
      <div className="search-bar">
        <input type="search" placeholder="Procurar" />
        <button>
          <MagnifyingGlass size="3rem" weight="bold" color="#848485" />
        </button>
      </div>
    </header>
  );
};
