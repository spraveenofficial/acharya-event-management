import Styles from "./Contribution.module.css";
import Button from "../ColorButton/Button";
import { useState } from "react";
const Contribute = () => {
  const [isLoading, setIsLoading] = useState(false);
  const Loading = () => {
    setIsLoading(!isLoading);
  };
  return (
    <div className={Styles.contribute}>
      <h1>
        Wants to Contribute? <span>🚀</span>
      </h1>
      <p>Let's grow this Open Source Project by giving some efforts.</p>
      <Button
        color="rgb(46, 110, 223)"
        onClick={Loading}
        loading={isLoading}
        text="Join Us Now"
      />
    </div>
  );
};

export default Contribute;
