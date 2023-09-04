import "./styles.css";
export const InputControl = ({
  name,
  type = "text",
  title,
  placeholder = "",
  description = "",
  passwordHelp,
  passwordHelpFunction,
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
      <div className="others"
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <span>{description}</span>
        <a
          style={{
            color: 'var(--normal-blue)',
            cursor: 'pointer'
          }}
          onClick={() => {
            passwordHelpFunction();
          }}
        >
          {passwordHelp && "Esqueci a senha"}
        </a>
      </div>
      
    </div>
  );
};
