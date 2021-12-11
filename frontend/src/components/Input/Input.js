import Styles from "./Input.module.css";

const Input = ({ width, name, onChange, error, type }) => {
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
      />
    </div>
  );
};

export default Input;
