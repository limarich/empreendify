import { useEffect, useState } from "react";
import "./styles.css";

import trashIcon from '../../assets/logos/TrashSimple.svg';

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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    // Chamando a função de callback do pai com o novo estado
    onStateChange(values, index);
  };

  function resizeRow() {
    var textarea = document.querySelector(".editable-row .input-control textarea");
    var editableRow = document.querySelector(".editable-row");
    const offset_editableRow = 100;

    console.log(textarea.style.height);
    console.log(textarea.scrollHeight);
    console.log(textarea.clientHeight);

    textarea.style.height = textarea.style.minHeight;
    if(textarea.scrollHeight > textarea.clientHeight) {
      editableRow.style.height = (40 + textarea.scrollHeight) + "px";
    }
  }

  return (
    <>
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
    </>
  );
};
