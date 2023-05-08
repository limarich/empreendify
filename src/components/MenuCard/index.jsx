import { useNavigate } from "react-router-dom";
import "./styles.css";

export const MenuCard = ({ img, title, description, url }) => {
  const navigate = useNavigate();
  return (
    <div className="card-option" onClick={() => navigate(url)}>
      {/* <a href={url}> */}
      <img src={img} alt={title} />
      <h1>{title}</h1> <p>{description}</p>
      {/* </a> */}
    </div>
  );
};
