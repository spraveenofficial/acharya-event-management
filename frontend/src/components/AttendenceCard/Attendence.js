import Styles from "./Attendence.module.css";
import Progress from "../ProgressBar/Progress";
const Attendence = ({ subjectName, totalClasses, attendedClasses, bg }) => {
  return (
    <div className={Styles.attendence}>
      <div style={{ background: bg }} className={Styles.first}>
        <p>{subjectName}</p>
      </div>
      <div className={Styles.second}>
        <div className={Styles.left}>
          <h3>Total Classes</h3>
          <h1>{totalClasses}</h1>
        </div>
        <div className={Styles.right}>
          <h3>Classes Attended</h3>
          <h1>{attendedClasses}</h1>
        </div>
      </div>
      <div className={Styles.third}>
        <Progress percentage="20px"/>
      </div>
    </div>
  );
};

export default Attendence;
