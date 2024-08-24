import { useState } from "react";
import "./styles.css";
import { X } from "@phosphor-icons/react";
import hintIcon from "../../assets/hint-icon.svg";

export const HintModal = ({ hints, isOpen, setIsOpen }) => {
  const [hint, setHint] = useState(0);
  const width = 600;

  return (
    <>
      <div
        className={`hint-container ${isOpen && "active"}`}
        style={{
          width: width,
          left: `calc(50% - ${width / 2}px)`,
        }}
      >
        <span className="hint-header">
          <X
            size={32}
            color="#000"
            style={{ position: "absolute" }}
            onClick={() => setIsOpen(false)}
          />
        </span>
        <div className="hint-content">
          <div className="hint-image">
            <img src={hintIcon} alt="" />
          </div>
          <div className="hint-text">
            <div className="hint-title">Dica #{hint + 1}</div>
            <div className="hint-description">{hints[hint]}</div>
          </div>
        </div>
        <div className="hint-footer">
          <div className="hint-progress">
            {hints.map((item, index) => (
              <div
                key={`${item}-${index}`}
                className={`hint-progress-bar  ${
                  index <= hint && "active-hint-bar"
                }`}
              ></div>
            ))}
          </div>
          <button
            className="hint-next-btn"
            onClick={() => {
              if (hint < hints.length - 1) setHint(hint + 1);
              else setHint(0);
            }}
          >
            Próximo
          </button>
        </div>
      </div>

      <div className={`fade ${isOpen && "active"}`}></div>
    </>
  );
};
