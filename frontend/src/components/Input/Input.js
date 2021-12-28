import Styles from "./Input.module.css";

const Input = ({
  width,
  placeholder,
  onChange,
  error,
  type,
  className,
  disabled,
  value,
  name
}) => {
  return (
    <div className={Styles.input}>
      <span className={Styles.error}>
        {error === true ? "This field is Required" : ""}
      </span>
      <input
        onChange={onChange}
        style={{ width: width }}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        className={className}
        value={value}
        name={name}
      />
    </div>
  );
};

export default Input;
