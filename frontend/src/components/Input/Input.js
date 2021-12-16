import Styles from "./Input.module.css";

const Input = ({
  width,
  name,
  onChange,
  error,
  type,
  className,
  disabled,
  value,
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
        placeholder={name}
        disabled={disabled}
        className={className}
        value={value}
      />
    </div>
  );
};

export default Input;
