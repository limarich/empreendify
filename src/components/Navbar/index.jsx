import { MagnifyingGlass } from "@phosphor-icons/react";
import { useLocation } from "react-router-dom";
import "./styles.css";

export const Navbar = () => {
  const location = useLocation();
  if (location.pathname === "/") return null;
  return (
    <header>
      <div className="logo">
        <h1>Simplify</h1>
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
