import "./Button.module.css";
import Loader from "../Loader/Loader";
const Button = ({ loading, text, onClick, color, className }) => {
  // const [loading, setLoading] = useState(false)
  return (
    <button
      className={className}
      onClick={onClick}
      style={color ? { background: color } : { color: "black" }}
    >
      {loading === true ? (
        <>
          <Loader /> <span>Loading</span>{" "}
        </>
      ) : (
        text
      )}
    </button>
  );
};

export default Button;
