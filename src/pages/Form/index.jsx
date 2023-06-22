import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "./styles.css";

import { forms } from '../BusinessPlan'

export const Form = () => {
  const navigate = useNavigate();
  const { content } = useParams();
  console.log(content);

  const [numberOfActivatedForm, setNumberOfActivatedForm] = useState(0);

  return (
    <div id="form-page">
      <div className="formHeader">
        <ul className="topics-list">
          {
            forms.map((form, index) => {
              console.log(index);
              console.log(`Estado: ${numberOfActivatedForm}`);
              return(
                <li 
                  key={index}
                  className={`topic-item ${index == numberOfActivatedForm ? "selected" : ""}`}
                  onClick={() => {
                    setNumberOfActivatedForm(index);
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
          <h1 className="title">{forms[numberOfActivatedForm].title}</h1>
        </div>
      </div>
    </div>
  );
};
