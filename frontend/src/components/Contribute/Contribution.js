import Styles from "./Contribution.module.css";
import Button from "../ColorButton/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Contribute = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const Loading = () => {
    setIsLoading(!isLoading);
    setTimeout(() => {
      navigate("/contribute");
    }, 2000);
  };
  return (
    <div className={Styles.contribute}>
      <h1>
        Wants to Contribute? <span>🚀</span>
      </h1>
      <p>Let's grow this Open Source Project by giving some efforts.</p>
      <Button
        color="rgb(46, 110, 223)"
        // onClick={}
        loading={isLoading}
        text="Join Us Now"
        onClick={Loading}
      />
    </div>
  );
};

export default Contribute;
