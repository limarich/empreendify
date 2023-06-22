import { useEffect, useState } from "react";

import "./styles.css";

export const EditableList = ({ tag, second }) => {
  const [list, setList] = useState(["● "]);

  const handleOnChange = (event) => {
    const value = event.target.value;
    setList(value.split("\n"));
  };

  const handleOnKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const textAreaValue = event.target.value.trim();
      if (textAreaValue !== "") {
        setList([...list, "● "]);
      }

    } else if(event.key === "Backspace") {

      if (list[list.length - 1] == "● ") {
        event.preventDefault();

        if(list.length !== 1) {
          list.pop();
          setList([...list]);
        }
      }
    }
  };

  const textAreaValue = list.join("\n");

  return (
    <div 
      className="editable-list"
      style={{  }}
    >
      <span
        className="tag"
        style={{ backgroundColor: second ? "#e45e5e" : "#5EA4E4" }}
      >
        {tag}
      </span>
      <textarea
        value={textAreaValue}
        onChange={handleOnChange}
        onKeyDown={handleOnKeyDown}
      />
    </div>
  );
};
