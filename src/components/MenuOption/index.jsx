import { useNavigate } from "react-router-dom";
import "./styles.css";

export const MenuOption = ({
  title,
  description,
  img_url = "",
  link = "/home",
}) => {
  const navigate = useNavigate();

  return (
    <div
      className="card-container"
      onClick={() => {
        navigate(link);
      }}
    >
      <div className="card-text-content">
        <div className="card-title">{title}</div>
        <div className="card-description">{description}</div>
      </div>
      <div className="card-img">
        <img src={img_url} alt={title} />
      </div>
    </div>
  );
};
