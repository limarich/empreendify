import { useState } from "react";

export const EditableList = () => {
  const [list, setList] = useState(["·"]);

  const handleOnChange = (event) => {
    const value = event.target.value;
    setList(value.split("\n"));
  };

  const handleOnKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const textAreaValue = event.target.value.trim();
      if (textAreaValue !== "") {
        setList([...list, "·"]);
      }
    }
  };

  const textAreaValue = list.join("\n");

  return (
    <div>
      <textarea
        value={textAreaValue}
        onChange={handleOnChange}
        onKeyDown={handleOnKeyDown}
      />
    </div>
  );
};
