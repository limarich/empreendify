import React from "react";
import styles from "./styles.module.css";

import { ArrowRight, ArrowLeft } from "@phosphor-icons/react";
import { useNavigate, useParams } from "react-router-dom";

import { texts } from "../index";
import { Container } from "../../../components/Container";

export const TextEntreprenaurialActivity = (props) => {
  const navigate = useNavigate();

  const { textID } = useParams();
  console.log(textID);

  return (
    <Container referenceTo={5}>
      <div className={styles.textEntreprenaurialActivity}>
        <div className={styles.headerEntreprenaur}>
          <button
            href="#"
            className={styles.goBack}
            onClick={() => {
              const value = Number(textID) - 1;
              if (value > 0) {
                navigate(`/entrepreneurial-activity/${value}`);
              }
            }}
          >
            <ArrowLeft
              size={28}
              color={textID == 1 ? "var(--light-gray-3)" : "#000"}
              style={{
                margin: 20,
              }}
            />
          </button>
          <button
            href="#"
            className={styles.goFoward}
            onClick={() => {
              const value = Number(textID) + 1;
              if (value <= texts.length) {
                navigate(`/entrepreneurial-activity/${value}`);
              }
            }}
          >
            <ArrowRight
              size={28}
              color={textID == texts.length ? "var(--light-gray-3)" : "#000"}
              style={{
                marginRight: 20,
              }}
            />
          </button>
          <h2 className={styles.title}>{texts[textID - 1].title}</h2>
        </div>

        <div className={styles.container}>
          <div className={styles.contentContainer}>
            <p className={styles.text}>{texts[textID - 1].text}</p>
          </div>
        </div>
      </div>
    </Container>
  );
};
