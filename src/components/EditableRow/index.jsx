import { useEffect, useState } from "react";
import "./styles.css";

import trashIcon from "../../assets/logos/TrashSimple.svg";
import trashIconHovered from "../../assets/logos/TrashSimpleFilled.svg";

export const EditableRow = (
  { showHeader, handleChildStateChange, index, handleDeleteEditableRow, state }
) => {

  const [isHovered, setIsHovered] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    let array = {...state, [name]: value };
    // Chamando a função de callback do pai com o novo estado
    handleChildStateChange(array, index);
  };

  // Essa função não está funcionando apropriadamente ainda
  // Necessário pensar em uma lógica melhor
  function resizeRow() {
    var editableRow = document.querySelector(".editable-row");
    
    var textarea = document
    .querySelectorAll(".editable-row .input-control textarea");
    textarea.forEach((area => {
  
      area.style.height = area.style.minHeight;
      if(area.scrollHeight > area.clientHeight) {
        editableRow.style.height = (70 + area.scrollHeight) + "px";
      }

    }));
  }

  const [editableRowHover, setEditableRowHover] = useState(false);

  function onMouseEnter() {
    setEditableRowHover(true);
  }

  function onMouseLeave() {
    if(isHovered == false) {
      setEditableRowHover(false);
    }
  }

  return (
    <div 
      className="content-container-editable-row"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div 
        className="general-editable-row"
      >
        <div className="editable-row">
          <div className="input-control">
            {showHeader && <span className="header">O que?</span>}
            <span className="tag">What</span>
            <textarea
              name="what"
              value={state.what}
              onChange={handleInputChange}
              onInput={resizeRow}
            />
          </div>
          <div className="input-control">
            {showHeader && <span className="header"> Por que?</span>}
            <span className="tag">Why</span>
            <textarea
              name="why" 
              value={state.why} 
              onChange={handleInputChange}
              onInput={resizeRow}
            />
          </div>
          <div className="input-control">
            {showHeader && <span className="header">Onde?</span>}
            <span className="tag">Where</span>
            <textarea
              name="where"
              value={state.where}
              onChange={handleInputChange}
              onInput={resizeRow}
            />
          </div>
          <div className="input-control">
            {showHeader && <span className="header">Quando?</span>}
            <span className="tag">When</span>
            <textarea
              name="when"
              value={state.when}
              onChange={handleInputChange}
              onInput={resizeRow}
            />
          </div>
          <div className="input-control">
            {showHeader && <span className="header">Quem?</span>}
            <span className="tag">Who</span>
            <textarea 
              name="who" 
              value={state.who} 
              onChange={handleInputChange}
              onInput={resizeRow}
            />
          </div>
          <div className="input-control">
            {showHeader && <span className="header">Como?</span>}
            <span className="tag">How</span>
            <textarea 
              name="how" 
              value={state.how} 
              onChange={handleInputChange}
              onInput={resizeRow} 
            />
          </div>
          <div className="input-control">
            {showHeader && <span className="header">Quanto?</span>}
            <span className="tag">How Many</span>
            <textarea
              name="howMany"
              value={state.howMany}
              onChange={handleInputChange}
              onInput={resizeRow}
            />
          </div>
          <div className="input-control">
            {showHeader && <span className="header">Status</span>}
            <span className="tag">Status</span>
            <textarea
              name="status"
              value={state.status}
              onChange={handleInputChange}
              onInput={resizeRow}
            />
          </div>
        </div>
      </div>

      {
        editableRowHover &&
        <a
          href="#"
          className="linkReference"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => handleDeleteEditableRow()}
        >
          <img
            className="trash-icon"
            alt="Trash Icon"
            src={isHovered ? trashIconHovered : trashIcon}
          />
        </a>
      }
      
    </div>
  );
};
