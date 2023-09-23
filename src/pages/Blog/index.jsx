import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./styles.css";

import { SectionHeader } from "../../components/SectionHeader";

import { options } from "../Home";
import { Container } from "../../components/Container";

export const Blog = () => {
  const navigate = useNavigate();

  const { blogID } = useParams();
  console.log(blogID);

  if (blogID < 1 || blogID > options.length) {
    return;
  }

  return (
    <Container referenceTo={4} >
      <div id="blog">
        <div className="header-Container">
          <SectionHeader
            title={options[blogID - 1].title}
            description={options[blogID - 1].description}
          />
        </div>
        <img
          className="imageHeader"
          src={options[blogID - 1].img}
          alt="Imagem"
        />
        <div className="container-Here">
          <div className="contentContainer-Here">
            <p className="text-Here">{options[blogID - 1].text}</p>
          </div>
        </div>
      </div>
    </Container>
  );
};
