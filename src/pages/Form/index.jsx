import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./styles.css"; 

import { Container } from "../../components/Container";

import { useSelector, useDispatch } from "react-redux";
import { alterForms } from "../../store/Foms/Forms.actions";

export const Form = () => {

  // Para navegação entre páginas
  const navigate = useNavigate();
  // Recuperar informações do Forms
  const { formID } = useParams();

  // Recuperar formulários do Redux
  const dispatch = useDispatch();
  const forms = useSelector(state => {
    return state.forms
  });

  // Array auxliar para visualização dos formulários
  let lengthOfFormPagesArray = [];
  for (let i = 0; i < forms[formID].totalPages; i++) {
    lengthOfFormPagesArray.push(i + 1);
  }

  // Identificador da página do formulário correspondente
  const [formPageID, setFormPageID] = useState(1);
  useEffect(() => {
    setFormPageID(1);
  }, [formID]);


  // HANDLES
  // Para atualizar a resposta
  const handleUpdateResponse = (event, index) => {
    dispatch(alterForms(
      event.target.value, formID, formPageID - 1, index
    ));
    
    console.log(event.target.value);
    console.log(`Indices: ${formID} ${formPageID - 1} ${index}`);
  }

  const handleToPage = (index) => {
    navigate(`/business-plan/${index}`);
  }

  // Para navegar para a próxima página
  const handleNextPage = () => {
    if (formPageID < forms[formID].totalPages) {
      setFormPageID(formPageID + 1);
      window.scrollTo(0, 0);
      console.log(formPageID);
    } else {
      navigate("/business-plan");
    }
  }

  // Para navegar para a página anterior
  const handlePreviousPage = () => {
    if (formPageID > 1) {
      setFormPageID(formPageID - 1);
      window.scrollTo(0, 0);
      console.log(formPageID);
    }
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
                  onClick={() => handleToPage(index)}
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
              {lengthOfFormPagesArray.map((indicator, index) => {

                const tag = (
                  <div className={`pageIndicator`} key={index}>
                    {indicator}
                  </div>
                );
                const selectedTag = (
                  <div className={`pageIndicator selected`} key={index}>
                    {indicator}
                  </div>
                );

                return indicator == formPageID ? selectedTag : tag;
              })}
            </div>

            {/* Início do formulário dinâmico */}
            {
              forms[formID].pages[formPageID - 1] &&
              forms[formID].pages[formPageID - 1].map((page, index) => {

                if(page.textareaQuestion) {
                  const textareaQuestion = (
                    <div 
                      key={index}
                      className="questionContainer"
                    >
                      <p className="questionTitle">{page.textareaQuestion}</p>
                      <textarea
                        id="answer-textarea"
                        cols={30}
                        rows={10}
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
                      key={index}
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
              })
            }
            {/* Finalização do formulário dinâmico */}

            <div className="buttonsContainer">
              <button
                className="previous-button"
                onClick={handlePreviousPage}
              >
                Voltar
              </button>
              <button
                className="next-button"
                onClick={handleNextPage}
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
