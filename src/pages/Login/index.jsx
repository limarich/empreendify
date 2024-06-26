import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./styles.css";

import { InputControl } from "../../components/InputControl";

import logo from "../../assets/i9ender-logo.png";

import api from "../../api";
import message from "../../utils/message";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogging = async () => {
    try {
      const { data } = await api.post("/sections", {
        email,
        password,
      });

      localStorage.setItem("userData", JSON.stringify(data.user));
      localStorage.setItem("accessToken", JSON.stringify(data.token));

      navigate("/home");
    } catch (err) {
      message("Verifique as suas credenciais", "error");
      console.error(err);
    }
  };

  const navigate = useNavigate();

  return (
    <section id="login-section">
      {/* <div className="logo">
        <img src={logo} alt="logo" />
      </div> */}
      <form>
        <div className="form-header">
          <h1>
            Bem-vindo! <span>✋</span>
          </h1>
          <h3>Vamos planejar o seu sucesso!</h3>
        </div>
        <div className="form-body">
          <InputControl
            name="login"
            title="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="email@gmail.com"
          />
          <InputControl
            name="password"
            title="Senha"
            type="password"
            description="Senha de 8 digitos"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            passwordHelp
            passwordHelpFunction={() => {
              setShowPopup(true);
            }}
          />
        </div>
        <button
          className="form-submit-btn"
          onClick={(e) => {
            e.preventDefault();
            handleLogging();
          }}
        >
          Entrar
        </button>
      </form>
    </section>
  );
};
