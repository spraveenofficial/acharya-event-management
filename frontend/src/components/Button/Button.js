import "./Button.module.css";
import Loader from "../Loader/Loader";
const Button = ({ loading, text, onClick }) => {
  // const [loading, setLoading] = useState(false)
  return (
    <button onClick={onClick}>
      {loading === true ? <><Loader /> <span>Loading</span> </> : text}
    </button>
  );
};

export default Button;
