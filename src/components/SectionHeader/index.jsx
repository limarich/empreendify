import "./styles.css";
export const SectionHeader = ({ title, description, children }) => {
  return (
    <div className="section-header">
      <div className="titleContainer">
        <h1>{title}</h1>
        {children}
      </div>
      <p>{description}</p>
    </div>
  );
};
