import { InputControl } from "../../components/InputControl";
import "./styles.css";
import logo from "../../assets/logo-empreendify.png";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const navigate = useNavigate();

  return (
    <section id="login-section">
      <div className="logo">
        <img src={logo} alt="logo" />
        <h1>Empreendfy</h1>
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
            title="Email ou Telefone"
            placeholder="email@gmail.com"
          />
          <InputControl
            name="password"
            title="Senha"
            type="password"
            description="Senha de 8 digitos"
          />
        </div>
        {/* <a href="/home"> */}
        <button className="form-submit-btn" onClick={() => navigate("/home")}>
          Entrar
        </button>
        {/* <a href="/home" className="form-submit-btn "> */}
        {/* Entrar
        </a> */}
        {/* </a> */}
      </form>
    </section>
  );
};
