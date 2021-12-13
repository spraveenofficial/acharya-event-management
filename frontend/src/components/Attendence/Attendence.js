import Styles from "./Attendence.module.css";
import { TrendUp, Check } from "phosphor-react";

const Attendence = () => {
  return (
    <div className={Styles.attendence}>
      <div className={Styles.content}>
        <p>Praveen Kumar Singh <span><Check weight="bold" size={20} /></span></p>
        <p>BCA</p>
      </div>
      <div className={Styles.percentage}>
        <TrendUp scale={50} size={48} />
        <h2>52%</h2>
      </div>
    </div>
  );
};

export default Attendence;
