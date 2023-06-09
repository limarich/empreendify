import { useEffect, useState } from "react";
import "./styles.css";

import trashIcon from '../../assets/logos/TrashSimple.svg';

export const EditableRow = ({ row, setPlainItems, showHeader }) => {
  const [values, setValues] = useState(row);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  useEffect(() => {
    console.log(values);
  }, [values]);

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
          />
        </div>
        <div className="input-control">
          {showHeader && <span className="header"> Por que?</span>}
          <span className="tag">Why</span>
          <textarea name="why" value={values.why} onChange={handleInputChange} />
        </div>
        <div className="input-control">
          {showHeader && <span className="header">Onde?</span>}
          <span className="tag">Where</span>
          <textarea
            name="where"
            value={values.where}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-control">
          {showHeader && <span className="header">Quando?</span>}
          <span className="tag">When</span>
          <textarea
            name="when"
            value={values.when}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-control">
          {showHeader && <span className="header">Quem?</span>}
          <span className="tag">Who</span>
          <textarea name="who" value={values.who} onChange={handleInputChange} />
        </div>
        <div className="input-control">
          {showHeader && <span className="header">Como?</span>}
          <span className="tag">How</span>
          <textarea name="how" value={values.how} onChange={handleInputChange} />
        </div>
        <div className="input-control">
          {showHeader && <span className="header">Quanto?</span>}
          <span className="tag">How Many</span>
          <textarea
            name="howMany"
            value={values.howMany}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-control">
          {showHeader && <span className="header">Status</span>}
          <span className="tag">Status</span>
          <textarea
            name="status"
            value={values.status}
            onChange={handleInputChange}
          />
        </div>

        {/* <button onCspanck={handleSave}>Salvar</button> */}
      </div>
    </>
  );
};
