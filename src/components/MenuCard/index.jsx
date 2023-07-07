import { useNavigate } from "react-router-dom";
import "./styles.css";

export const MenuCard = ({ img, title, description, url, activeButton }) => {
  const navigate = useNavigate();
  return (
    <div className="card-option" onClick={() => navigate(url)}>
      <div className="information-container">
        <h3>{title}</h3>
        <p>{description}</p>
        {
          activeButton &&
          <div className="button-container">
            <button
              className="link"
            >
              Faça o teste
            </button>
          </div>
        }
      </div>
      <div className="image-container">
        <img src={img} alt={title} />
      </div>
    </div>
  );
};
