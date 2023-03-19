import { InputControl } from "../../components/InputControl";
import "./styles.css";
export const Login = () => {
  return (
    <section>
      <div className="logo">
        <h1>Simplify</h1>
      </div>
      <form action="/home" method="GET">
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
        <button className="form-submit-btn">Entrar</button>
      </form>
    </section>
  );
};
