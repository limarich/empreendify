import React from "react";
import "./styles.css";

import { SectionHeader } from '../../components/SectionHeader';

import Image from '../../assets/card-img3.png';

export const Blog = () => {
  return(
    <div id="blog">
      <div className="headerContainer">
        <SectionHeader
          title={"Tipos de Empresas, Porte e Regime Tributário"}
          description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
        />
      </div>
      <img
        className="imageHeader"
        src={Image}
        alt="Imagem" 
      />
      <div className="container">
        <div className="contentContainer">
          <p className="text">
            À primeira vista o Business Model Canvas parece um simples diagrama. A facilidade de análise que ele traz só passa a ser realmente compreendida à medida que começarmos a visualizar exemplos e a utilizá-lo em nosso dia-a-dia.
            <br />
            <br />
            <br />

            À primeira vista o Business Model Canvas parece um simples diagrama. A facilidade de análise que ele traz só passa a ser realmente compreendida à medida que começarmos a visualizar exemplos e a utilizá-lo em nosso dia-a-dia.
            À primeira vista o Business Model Canvas parece um simples diagrama. A facilidade de análise que ele traz só passa a ser realmente compreendida à medida que começarmos a visualizar exemplos e a utilizá-lo em nosso dia-a-dia.
            À primeira vista o Business Model Canvas parece um simples diagrama. A facilidade de análise que ele traz só passa a ser realmente compreendida à medida que começarmos a visualizar exemplos e a utilizá-lo em nosso dia-a-dia.
            À primeira vista o Business Model Canvas parece um simples diagrama. A facilidade de análise que ele traz só passa a ser realmente compreendida à medida que começarmos a visualizar exemplos e a utilizá-lo em nosso dia-a-dia.
            À primeira vista o Business Model Canvas parece um simples diagrama. A facilidade de análise que ele traz só passa a ser realmente compreendida à medida que começarmos a visualizar exemplos e a utilizá-lo em nosso dia-a-dia.
            <br />
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