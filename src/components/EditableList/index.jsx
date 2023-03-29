import { useState } from "react";

import "./styles.css";

export const EditableList = ({ tag, second }) => {
  const [list, setList] = useState(["●"]);

  const handleOnChange = (event) => {
    const value = event.target.value;
    setList(value.split("\n"));
  };

  const handleOnKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const textAreaValue = event.target.value.trim();
      if (textAreaValue !== "") {
        setList([...list, "●"]);
      }
    }
  };

  const textAreaValue = list.join("\n");

  return (
    <div className="editable-list">
      <span
        className="tag"
        style={{ backgroundColor: second ? "#e45e5e" : "#6dc98b" }}
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
