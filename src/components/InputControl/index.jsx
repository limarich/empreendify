import "./styles.css";
export const InputControl = ({
  name,
  type = "text",
  title,
  placeholder = "",
  description = "",
  retrive_password_field,
  value,
  onChange,
}) => {
  return (
    <div className="input-control">
      <label htmlFor={name}>{title}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <span>{description}</span>
      {retrive_password_field && <a href="#">Esqueci a senha</a>}
    </div>
  );
};
