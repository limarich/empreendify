import React from "react";
import { useNavigate } from "react-router-dom";

import "./styles.css";

import { texts } from '../index';

export const EntrepreneurialCard = (props) => {
  const navigate = useNavigate();

  return (
    <div className="contentCard">
      <h3 className="title-card">{props.title}</h3>
      <p className="description-card">{props.abstract}</p>
      <button 
        className="link-card" 
        href="#"
        onClick={() => {
          navigate(`/entrepreneurial-activity/${Number(props.index) + 1}`)
        }}
      >
        Saiba Mais
      </button>
    </div>
  )
}