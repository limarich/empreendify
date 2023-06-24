import React from "react";
import styles from './styles.module.css';

import { ArrowRight, ArrowLeft } from "@phosphor-icons/react";

export const TextEntreprenaurialActivity = () => {
  return(
    <div className={styles.textEntreprenaurialActivity}>
      <div className={styles.headerEntreprenaur}>
        <button href="#" className={styles.goBack}>
          <ArrowLeft size={28} color="#000" style={{
            margin: 20
          }} />
        </button>
        <button href="#" className={styles.goFoward}>
          <ArrowRight size={28} color="#000" style={{
            marginRight: 20
          }} />
        </button>
        <h2 className={styles.title}>Análise da Atividade Empreendedora</h2>
      </div>
      <div className={styles.container}>
        <div className={styles.contentContainer}>
          <p className={styles.text}>
          À primeira vista o Business Model Canvas parece um simples diagrama. A facilidade de análise que ele traz só passa a ser realmente compreendida à medida que começarmos a visualizar exemplos e a utilizá-lo em nosso dia-a-dia.
          <br />
          <br />
          À primeira vista o Business Model Canvas parece um simples diagrama. A facilidade de análise que ele traz só passa a ser realmente compreendida à medida que começarmos a visualizar exemplos e a utilizá-lo em nosso dia-a-dia.
          À primeira vista o Business Model Canvas parece um simples diagrama. A facilidade de análise que ele traz só passa a ser realmente compreendida à medida que começarmos a visualizar exemplos e a utilizá-lo em nosso dia-a-dia.
          À primeira vista o Business Model Canvas parece um simples diagrama. A facilidade de análise que ele traz só passa a ser realmente compreendida à medida que começarmos a visualizar exemplos e a utilizá-lo em nosso dia-a-dia.
          À primeira vista o Business Model Canvas parece um simples diagrama. A facilidade de análise que ele traz só passa a ser realmente compreendida à medida que começarmos a visualizar exemplos e a utilizá-lo em nosso dia-a-dia.
          À primeira vista o Business Model Canvas parece um simples diagrama. A facilidade de análise que ele traz só passa a ser realmente compreendida à medida que começarmos a visualizar exemplos e a utilizá-lo em nosso dia-a-dia.
          <br />
          À primeira vista o Business Model Canvas parece um simples diagrama. A facilidade de análise que ele traz só passa a ser realmente compreendida à medida que começarmos a visualizar exemplos e a utilizá-lo em nosso dia-a-dia.
          À primeira vista o Business Model Canvas parece um simples diagrama. A facilidade de análise que ele traz só passa a ser realmente compreendida à medida que começarmos a visualizar exemplos e a utilizá-lo em nosso dia-a-dia.
          <br />
          <br />
          À primeira vista o Business Model Canvas parece um simples diagrama. A facilidade de análise que ele traz só passa a ser realmente compreendida à medida que começarmos a visualizar exemplos e a utilizá-lo em nosso dia-a-dia.
          </p>
        </div>
      </div>
    </div>
  )
}