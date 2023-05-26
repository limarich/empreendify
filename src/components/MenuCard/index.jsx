import { useNavigate } from "react-router-dom";
import "./styles.css";

export const MenuCard = ({ img, title, description, url }) => {
  const navigate = useNavigate();
  return (
    <div className="card-option" onClick={() => navigate(url)}>
      <div className="information-container">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="image-container">
        <img src={img} alt={title} />
      </div>
    </div>
  );
};
