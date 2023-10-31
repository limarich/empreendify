import { useEffect, useState } from "react";
import { Container } from "../../components/Container";

import styles from "./styles.module.css";
import { getUserData } from "../../utils/getUserData";
import { updateUserController } from "./controller";

export const Profile = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const widthOfPopup = 320;

  useEffect(() => {
    const user = getUserData();

    if (user) {
      setName(user.name);
      setPhone(user.phone);
      setEmail(user.email);
    }
  }, []);

  const onSubmit = async () => {
    const res = await updateUserController({
      confirmPassword,
      email,
      name,
      password,
      phone,
    });
    if (res) setShowPopup(true);
  };

  return (
    <Container>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <p className={styles.title}>Meu Perfil</p>

          <div className={styles.dataContainer}>
            <header className={styles.dataHeader}>Informações pessoais</header>
            <div className={styles.inputs}>
              <p className={styles.questionTitle}>Nome</p>
              <input
                className={styles.inputElement}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <p className={styles.questionTitle}>Telefone</p>
              <input
                className={styles.inputElement}
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <p className={styles.questionTitle}>Senha</p>
              <input
                className={styles.inputElement}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className={styles.questionTitle}>Confirme a Senha</p>
              <input
                className={styles.inputElement}
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <a href="#" className={styles.button} onClick={() => onSubmit()}>
              Salvar
            </a>
          </div>
        </div>
      </div>
      {showPopup && (
        <>
          <div
            className={styles.fade}
            style={
              showPopup && {
                display: "flex",
                border: "0px solid blue",
              }
            }
          >
            <div
              className={styles.popup}
              style={{
                width: widthOfPopup,
                left: `calc(50% - ${widthOfPopup / 2}px)`,
              }}
            >
              <h4 className={styles.popupTitle}>Sucesso! 🎉</h4>
              <p className={styles.popupDescription}>
                Suas informações foram salvas com sucesso. Clique em continuar
                para prosseguir!
              </p>
              <a
                href="#"
                className={styles.button}
                style={{
                  height: 30,
                  fontSize: 13,
                  borderRadius: 30,
                }}
                onClick={() => setShowPopup(false)}
              >
                Continuar
              </a>
            </div>
          </div>
        </>
      )}
    </Container>
  );
};
