import "./styles.css";

export const MenuCard = ({ img, title, description }) => {
  return (
    <div className="card-option">
      <img src={img} alt={title} />
      <h1>{title}</h1> <p>{description}</p>
    </div>
  );
};
