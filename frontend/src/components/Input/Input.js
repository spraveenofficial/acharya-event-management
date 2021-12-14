import Styles from "./Input.module.css";

const Input = ({ width, name, onChange, error, type, className }) => {
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
        className={className}
      />
    </div>
  );
};

export default Input;
