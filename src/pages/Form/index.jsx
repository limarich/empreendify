import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import "./styles.css"; 

import { Container } from "../../components/Container";

import { useSelector, useDispatch } from "react-redux";
import { alterForms, updateCompletedFormsNumber } from "../../store/Foms/Forms.actions";

export const Form = () => {

  // Para navegação entre páginas
  const navigate = useNavigate();
  // Recuperar informações do Forms
  const { formID } = useParams();

  // Recuperar formulários do Redux
  const dispatch = useDispatch();
  let forms = useSelector(state => {
    return state.forms
  });

  // Array auxliar para visualização dos formulários
  let formPagesArray = [];
  for (let i = 0; i < forms[formID].totalPages; i++) {
    formPagesArray.push(i + 1);
  }

  // Identificador da página do formulário correspondente
  const [formPageID, setFormPageID] = useState(0);
  useEffect(() => {
    dispatch(updateCompletedFormsNumber(formID, 0));
  }, []);
  useEffect(() => {
    setFormPageID(0);
  }, [formID]);

  // HANDLES
  // Para atualizar a resposta
  const handleUpdateResponse = (event, index) => {
    dispatch(alterForms(
      event.target.value, formID, formPageID, index
    ));
    
    console.log(event.target.value);
    console.log(`Indices: ${formID} ${formPageID} ${index}`);
  }

  const handleToPage = (index) => {
    navigate(`/business-plan/${index}`);
  }

  // Para navegar para a próxima página
  const handleNextPage = () => {

    dispatch(updateCompletedFormsNumber(
      formID, formPageID + 1
    ));
    console.log(`Páginas completadas: ${forms[formID].completedPages}`);

    if (formPageID < (forms[formID].totalPages - 1)) {
      setFormPageID(formPageID + 1);

      window.scrollTo(0, 0);
    } else {
      navigate("/business-plan");
    }
  }

  // Para navegar para a página anterior
  const handlePreviousPage = () => {
    if (formPageID > 0) {

      dispatch(updateCompletedFormsNumber(
        formID, formPageID - 1
      ));
      console.log(`Páginas completadas: ${forms[formID].completedPages}`);

      setFormPageID(formPageID - 1);

      window.scrollTo(0, 0);
    } else {
      navigate('/business-plan');
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
              {formPagesArray.map((indicator, index) => {

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

                return index == formPageID ? selectedTag : tag;
              })}
            </div>

            {/* Início do formulário dinâmico */}
            {
              forms[formID].pages[formPageID] &&
              forms[formID].pages[formPageID].map((question, index) => {

                if(question.textareaQuestion) {
                  const textareaQuestion = (
                    <div 
                      key={index}
                      className="questionContainer"
                    >
                      <p className="questionTitle">{question.textareaQuestion}</p>
                      <textarea
                        id="answer-textarea"
                        cols={30}
                        rows={10}
                        required

                        value={question.textareaQuestion.answer}
                        onChange={(event) => {
                            handleUpdateResponse(event, index)
                          }
                        }

                      ></textarea>
                    </div>
                  );
                  return textareaQuestion;
                }

                if(question.inputQuestion) {
                  const inputQuestion = (
                    <div
                      key={index}
                      className="questionContainer"
                    >
                      <p className="questionTitle">{question.inputQuestion}</p>
                      <div className="inputContainer">
                        <div className="inputType">{question.symbol}</div>
                        <input 
                          className="inputElement"
                          type="text"

                          value={question.inputQuestion.answer}
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
                {formPageID == (forms[formID].totalPages - 1)
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
