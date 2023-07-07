import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "./styles.css";

import { forms } from '../BusinessPlan'

export const Form = () => {
  const navigate = useNavigate();

  const { formID } = useParams();
  console.log(formID);

  return (
    <div id="form-page">
      <div className="formHeader">
        <ul className="topics-list">
          {
            forms.map((form, index) => {
              return(
                <li 
                  key={index}
                  className={`topic-item ${index == formID ? "selected" : ""}`}
                  onClick={() => {
                    navigate(`/business-plan/${index}`);
                  }}
                >
                  {form.title}
                </li>
              )
            })
          }
        </ul>
      </div>

      <div className="formContainer">
        <div className="formContentContainer">


          <h1 className="title">{forms[formID].title}</h1>

          <div className="pagesIndex-container">
            <div className="pageIndicator selected">1</div>
            <div className="pageIndicator">2</div>
            <div className="pageIndicator">3</div>
            <div className="pageIndicator">4</div>
            <div className="pageIndicator">5</div>
            <div className="pageIndicator">6</div>
            <div className="pageIndicator">7</div>
            <div className="pageIndicator">8</div>
          </div>

          <div className="questionContainer">
            <p className="questionTitle">
              Descrição do que é o negócio?
            </p>
            <textarea name="" id="answer-textarea" cols="30" rows="10">
            </textarea>
          </div>

          <div className="questionContainer">
            <p className="questionTitle">
              Quais os principais produtos e/ou serviços?
            </p>
            <textarea name="" id="answer-textarea" cols="30" rows="10">
            </textarea>
          </div>

          <div className="questionContainer">
            <p className="questionTitle">
              Qual o montante de capital a ser investido?
            </p>
            <div className="inputContainer">
              <div className="inputType">
                R$
              </div>
              <input className="inputElement" type="text" />
            </div>
          </div>


          <div className="buttonsContainer">
            <button className="previous-button">
              Voltar
            </button>
            <button className="next-button">
              Avançar
            </button>
          </div>


        </div>
      </div>
    </div>
  );
};
