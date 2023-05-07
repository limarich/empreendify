import "./styles.css";

export const MenuCard = ({ img, title, description, url }) => {
  return (
    <div className="card-option">
      <a href={url}>
        <img src={img} alt={title} />
        <h1>{title}</h1> <p>{description}</p>
      </a>
    </div>
  );
};
