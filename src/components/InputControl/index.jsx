import "./styles.css";
export const InputControl = ({
  name,
  type = "text",
  title,
  placeholder = "",
  description = "",
}) => {
  return (
    <div className="input-control">
      <label htmlFor={name}>{title}</label>
      <input type={type} name={name} placeholder={placeholder} />
      <span>{description}</span>
    </div>
  );
};
