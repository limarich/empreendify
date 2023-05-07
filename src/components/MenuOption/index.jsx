import "./styles.css";

export const MenuOption = ({ title, description, img_url = "" }) => {
  return (
    <div className="card-container">
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
