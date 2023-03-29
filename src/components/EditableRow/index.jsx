import { useState } from "react";

export const EditableRow = ({ row, setPlainItems }) => {
  const [values, setValues] = useState(row);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // const handleSave = () => {
  //   setPlainItems((prevItems) =>
  //     prevItems.map((item) => (item === row ? values : item))
  //   );
  // };

  return (
    <div className="row">
      <input
        type="text"
        name="what"
        value={values.what}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="why"
        value={values.why}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="where"
        value={values.where}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="when"
        value={values.when}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="who"
        value={values.who}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="how"
        value={values.how}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="howMany"
        value={values.howMany}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="status"
        value={values.status}
        onChange={handleInputChange}
      />
      {/* <button onClick={handleSave}>Salvar</button> */}
    </div>
  );
};
