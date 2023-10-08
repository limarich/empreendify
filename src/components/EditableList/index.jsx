import "./styles.css";

export const EditableList = ({ tag, second, value, setValue }) => {
  const handleOnChange = (event) => {
    const value = event.target.value;
    setValue(value.split("\n"));
  };

  const handleOnKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const textAreaValue = event.target.value.trim();
      if (textAreaValue !== "") {
        setValue([...value, "● "]);
      }
    } else if (event.key === "Backspace") {
      if (value[value.length - 1] == "● ") {
        event.preventDefault();

        if (value.length !== 1) {
          value.pop();
          setValue([...value]);
        }
      }
    }
  };

  const textAreaValue = value.join("\n");

  return (
    <div className="editable-list">
      <span
        className="tag"
        style={{
          backgroundColor: second ? "var(--dark-red)" : "var(--normal-blue)",
        }}
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
