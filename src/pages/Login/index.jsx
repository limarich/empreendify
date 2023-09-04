import { InputControl } from "../../components/InputControl";
import logo from "../../assets/logo-white.png";
import "./styles.css";

import { useNavigate } from "react-router-dom";
import api from "../../api";
import { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogging = async () => {
    try {
      const { data } = await api.post("/sections", {
        email,
        password,
      });

      localStorage.setItem("userData", JSON.stringify(data));

      navigate("/home");
    } catch (err) {
      console.error(err);
    }
  };

  const navigate = useNavigate();

  return (
    <section id="login-section">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
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
            retrive_password_field
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
