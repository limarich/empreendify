import { useEffect, useState } from "react";
import "./styles.css";

import trashIcon from "../../assets/logos/TrashSimple.svg";
import trashIconHovered from "../../assets/logos/TrashSimpleFilled.svg";

export const EditableRow = ({ showHeader, onStateChange, index }) => {
  const initialState = {
    what: "",
    why: "",
    where: "",
    when: "",
    who: "",
    how: "",
    howMany: "",
    status: "",
  };

  const [values, setValues] = useState(initialState);
  const [isHovered, setIsHovered] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    // Chamando a função de callback do pai com o novo estado
    onStateChange(values, index);
  };

  // Essa função não está funcionando apropriadamente ainda
  // Necessário pensar em uma lógica melhor
  function resizeRow() {
    var editableRow = document.querySelector(".editable-row");
    
    var textarea = document
    .querySelectorAll(".editable-row .input-control textarea");
    textarea.forEach((area => {

      console.log(area.style.height);
      console.log(area.scrollHeight);
      console.log(area.clientHeight);
  
      area.style.height = area.style.minHeight;
      if(area.scrollHeight > area.clientHeight) {
        editableRow.style.height = (70 + area.scrollHeight) + "px";
      }

    }));
  }

  return (
    <div className="content-container-editable-row">
      <div className="general-editable-row">
        <div className="editable-row">
          <div className="input-control">
            {showHeader && <span className="header">O que?</span>}
            <span className="tag">What</span>
            <textarea
              name="what"
              value={values.what}
              onChange={handleInputChange}
              onInput={resizeRow}
            />
          </div>
          <div className="input-control">
            {showHeader && <span className="header"> Por que?</span>}
            <span className="tag">Why</span>
            <textarea
              name="why" 
              value={values.why} 
              onChange={handleInputChange}
              onInput={resizeRow}
            />
          </div>
          <div className="input-control">
            {showHeader && <span className="header">Onde?</span>}
            <span className="tag">Where</span>
            <textarea
              name="where"
              value={values.where}
              onChange={handleInputChange}
              onInput={resizeRow}
            />
          </div>
          <div className="input-control">
            {showHeader && <span className="header">Quando?</span>}
            <span className="tag">When</span>
            <textarea
              name="when"
              value={values.when}
              onChange={handleInputChange}
              onInput={resizeRow}
            />
          </div>
          <div className="input-control">
            {showHeader && <span className="header">Quem?</span>}
            <span className="tag">Who</span>
            <textarea 
              name="who" 
              value={values.who} 
              onChange={handleInputChange}
              onInput={resizeRow}
            />
          </div>
          <div className="input-control">
            {showHeader && <span className="header">Como?</span>}
            <span className="tag">How</span>
            <textarea 
              name="how" 
              value={values.how} 
              onChange={handleInputChange}
              onInput={resizeRow} 
            />
          </div>
          <div className="input-control">
            {showHeader && <span className="header">Quanto?</span>}
            <span className="tag">How Many</span>
            <textarea
              name="howMany"
              value={values.howMany}
              onChange={handleInputChange}
              onInput={resizeRow}
            />
          </div>
          <div className="input-control">
            {showHeader && <span className="header">Status</span>}
            <span className="tag">Status</span>
            <textarea
              name="status"
              value={values.status}
              onChange={handleInputChange}
              onInput={resizeRow}
            />
          </div>
        </div>
      </div>
      <a
        href="#"
        className="linkReference"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={(index) => handleDeleteEditableRow(index)}
      >
        <img
          className="trash-icon"
          alt="Trash Icon"
          src={isHovered ? trashIconHovered : trashIcon}
        />
      </a>
    </div>
  );
};
