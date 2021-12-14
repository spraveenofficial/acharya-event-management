import Styles from "./Attendence.module.css";
import { TrendUp, Check } from "phosphor-react";

const Attendence = ({ percentage }) => {
  return (
    <div className={Styles.attendence}>
      <div className={Styles.content}>
        <p>
          Praveen Kumar Singh{" "}
          <img
            src="https://i.ya-webdesign.com/images/instagram-verified-badge-png-1.png"
            alt=""
          />
        </p>
        <p>BCA</p>
      </div>
      <div className={Styles.percentage}>
        <TrendUp color="green" weight="bold" size={48} />
        <h2 style={{ color: "green" }}>50%</h2>
      </div>
    </div>
  );
};

export default Attendence;
