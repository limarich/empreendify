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
        </div>
      </div>
    </div>
  );
};
