import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "./styles.css";

import { Container } from "../../components/Container";

import { useSelector, useDispatch } from "react-redux";
import { alterForms } from "../../store/Foms/Forms.actions";

export const Form = () => {

  const dispatch = useDispatch();
  const forms = useSelector(state => {
    return state.forms
  });

  const navigate = useNavigate();
  const { formID } = useParams();

  let lengthOfFormPages = [];
  for (let i = 0; i < forms[formID].totalPages; i++) {
    lengthOfFormPages.push(i + 1);
  }

  // Identificador da página do formulário correspondente
  const [formPageID, setFormPageID] = useState(1);
  useEffect(() => {
    setFormPageID(1);
  }, [formID]);

  const handleUpdateResponse = (event, index) => {
    dispatch(alterForms(
      event.target.value, formID, formPageID - 1, index
    ));

    console.log(`Indices: ${formID} ${formPageID - 1} ${index}`);

  }

  return (
    <Container>
      <div id="form-page">
        <div className="formHeader">
          <ul className="topics-list">
            {forms.map((form, index) => {
              return (
                <li
                  key={index}
                  className={`topic-item ${index == formID ? "selected" : ""}`}
                  onClick={() => {
                    navigate(`/business-plan/${index}`);
                  }}
                >
                  {form.title}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="formContainer">
          <div className="formContentContainer">
            <h1 className="title">{forms[formID].title}</h1>

            <div className="pagesIndex-container">
              {lengthOfFormPages.map((indicator, index) => {
                const tag = <div className={`pageIndicator`}>{indicator}</div>;
                const selectedTag = (
                  <div className={`pageIndicator selected`}>{indicator}</div>
                );

                return indicator == formPageID ? selectedTag : tag;
              })}
            </div>

            {/* Início do formulário dinâmico */}
            {forms[formID].pages[formPageID - 1] &&
              forms[formID].pages[formPageID - 1].map((page, index) => {

                if(page.textareaQuestion) {
                  const textareaQuestion = (
                    <div 
                      key={`${formID}${formPageID - 1}${index}`}
                      className="questionContainer"
                    >
                      <p className="questionTitle">{page.textareaQuestion}</p>
                      <textarea
                        name=""
                        id="answer-textarea"
                        cols="30"
                        rows="10"
                        required
                        value={page.textareaQuestion.answer}
                        onChange={(event) => {
                            handleUpdateResponse(event, index)
                          }
                        }

                      ></textarea>
                    </div>
                  );
                  return textareaQuestion;
                }

                if(page.inputQuestion) {
                  const inputQuestion = (
                    <div
                      key={`${formID}${formPageID - 1}${index}`}
                      className="questionContainer"
                    >
                      <p className="questionTitle">{page.inputQuestion}</p>
                      <div className="inputContainer">
                        <div className="inputType">{page.symbol}</div>
                        <input 
                          className="inputElement"
                          type="text"
                          value={page.inputQuestion.answer}
                          onChange={(event) => {
                              handleUpdateResponse(event, index)
                            }
                          }
                        />
                      </div>
                    </div>
                  );
                  return inputQuestion;
                }
              })}
            {/* Finalização do formulário dinâmico */}

            <div className="buttonsContainer">
              <button
                className="previous-button"
                onClick={() => {
                  if (formPageID > 1) {
                    setFormPageID(formPageID - 1);
                    window.scrollTo(0, 0);
                    console.log(formPageID);
                  }
                }}
              >
                Voltar
              </button>
              <button
                className="next-button"
                onClick={() => {
                  if (formPageID < forms[formID].totalPages) {
                    setFormPageID(formPageID + 1);
                    window.scrollTo(0, 0);
                    console.log(formPageID);
                  } else {
                    navigate("/business-plan");
                  }
                }}
              >
                {formPageID == forms[formID].totalPages
                  ? "Finalizar"
                  : "Avançar"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
