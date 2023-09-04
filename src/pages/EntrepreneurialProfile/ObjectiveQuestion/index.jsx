import styles from "./styles.module.css";

export const ObjectiveQuestion = ({ description }) => {
  return (
    <div>
      <p className="description">
        {description}
      </p>
      <div className="buttons">
        <a href="#" className="button">Sim 👍</a>
        <a href="#" className="button">Não 👎</a>
      </div>
    </div>
  );
};
