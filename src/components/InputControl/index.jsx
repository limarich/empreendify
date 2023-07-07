import "./styles.css";
export const InputControl = ({
  name,
  type = "text",
  title,
  placeholder = "",
  description = "",
  retrive_password_field
}) => {
  return (
    <div className="input-control">
      <label htmlFor={name}>{title}</label>
      <input type={type} name={name} placeholder={placeholder} />
      <span>{description}</span>
      {
        retrive_password_field &&
          <a href="#">
            Esqueci a senha
          </a>
      }
    </div>
  );
};
