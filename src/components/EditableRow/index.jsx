import { useEffect, useState, useRef } from "react";
import "./styles.css";

import trashIcon from "../../assets/logos/TrashSimple.svg";
import trashIconHovered from "../../assets/logos/TrashSimpleFilled.svg";

import { TextareaAutosize } from "@mui/base/TextareaAutosize";

export const EditableRow = ({
  showHeader,
  handleChildStateChange,
  index,
  handleDeleteEditableRow,
  state,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const initialMinHeightForInput = 7;
  const maxHeightForInput = 10;
  const [minHeightForInput, setMinHeightForInput] = useState(
    initialMinHeightForInput
  );
  const [textareaHeights, setTextareaHeights] = useState([0, 0, 0, 0, 0, 0, 0]);

  let textareaRefs = [];
  for (let i = 0; i < 8; i++) {
    textareaRefs[i] = useRef(null);
  }

  function encontrarMaximo(numeros) {
    if (numeros.length === 0) {
      return NaN;
    }

    let maximo = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
      if (numeros[i] > maximo) {
        maximo = numeros[i];
      }
    }

    return maximo;
  }

  function calculateRowsInTextarea(indexOfTextarea) {
    let rows = 7;
    return rows;
  }

  const handleInputChange = (event, indexOfTextarea) => {
    const { name, value } = event.target;

    let array = { ...state, [name]: value };
    // Chamando a função de callback do pai com o novo estado
    handleChildStateChange(array, index);

    // Atualizar tamanho das caixas de texto
    let arrayHeights = [...textareaHeights];
    let heightOfThisTextarea = calculateRowsInTextarea(indexOfTextarea);

    arrayHeights[indexOfTextarea] = heightOfThisTextarea;
    setTextareaHeights([...arrayHeights]);
    console.log(arrayHeights);

    let maxArrayHeight = encontrarMaximo(arrayHeights);
    console.log(maxArrayHeight);

    if (
      maxArrayHeight >= initialMinHeightForInput &&
      maxArrayHeight <= maxHeightForInput
    ) {
      setMinHeightForInput(maxArrayHeight);
    }
  };

  const [editableRowHover, setEditableRowHover] = useState(false);

  function onMouseEnter() {
    setEditableRowHover(true);
  }

  function onMouseLeave() {
    if (isHovered == false) {
      setEditableRowHover(false);
    }
  }

  return (
    <div
      className="content-container-editable-row"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="general-editable-row">
        <div className="editable-row">
          <div className="input-control">
            {showHeader && <span className="header">O que?</span>}
            <span className="tag">What</span>
            <TextareaAutosize
              minRows={minHeightForInput}
              maxRows={maxHeightForInput}
              value={state.what}
              ref={textareaRefs[0]}
              name="what"
              onChange={(event) => {
                handleInputChange(event, 0);
              }}
            />
          </div>
          <div className="input-control">
            {showHeader && <span className="header"> Por que?</span>}
            <span className="tag">Why</span>
            <TextareaAutosize
              minRows={minHeightForInput}
              maxRows={maxHeightForInput}
              value={state.why}
              ref={textareaRefs[1]}
              name="why"
              onChange={(event) => handleInputChange(event, 1)}
            />
          </div>
          <div className="input-control">
            {showHeader && <span className="header">Onde?</span>}
            <span className="tag">Where</span>
            <TextareaAutosize
              className="input-control-autosize"
              minRows={minHeightForInput}
              maxRows={maxHeightForInput}
              value={state.where}
              ref={textareaRefs[2]}
              name="where"
              onChange={(event) => handleInputChange(event, 2)}
            />
          </div>
          <div className="input-control">
            {showHeader && <span className="header">Quando?</span>}
            <span className="tag">When</span>
            <TextareaAutosize
              minRows={minHeightForInput}
              maxRows={maxHeightForInput}
              value={state.when}
              ref={textareaRefs[3]}
              name="when"
              onChange={(event) => handleInputChange(event, 3)}
            />
          </div>
          <div className="input-control">
            {showHeader && <span className="header">Quem?</span>}
            <span className="tag">Who</span>
            <TextareaAutosize
              minRows={minHeightForInput}
              maxRows={maxHeightForInput}
              value={state.who}
              ref={textareaRefs[4]}
              name="who"
              onChange={(event) => handleInputChange(event, 4)}
            />
          </div>
          <div className="input-control">
            {showHeader && <span className="header">Como?</span>}
            <span className="tag">How</span>
            <TextareaAutosize
              minRows={minHeightForInput}
              maxRows={maxHeightForInput}
              value={state.how}
              ref={textareaRefs[5]}
              name="how"
              onChange={(event) => handleInputChange(event, 5)}
            />
          </div>
          <div className="input-control">
            {showHeader && <span className="header">Quanto?</span>}
            <span className="tag">How Many</span>
            <TextareaAutosize
              minRows={minHeightForInput}
              maxRows={maxHeightForInput}
              value={state.howMany}
              ref={textareaRefs[6]}
              name="howMany"
              onChange={(event) => handleInputChange(event, 6)}
            />
          </div>
          {/* <div className="input-control">
            {showHeader && <span className="header">Status</span>}
            <span className="tag">Status</span>
            <TextareaAutosize
              minRows={minHeightForInput}
              maxRows={maxHeightForInput}
              value={state.status}
              ref={textareaRefs[7]}

              name="status"
              onChange={(event) => handleInputChange(event, 7)}
            />
          </div> */}
        </div>
      </div>

      {editableRowHover && (
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
      )}
    </div>
  );
};
