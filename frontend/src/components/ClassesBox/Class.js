import Styles from "./Class.module.css";

const Classes = ({ subjectName, time, date, bg }) => {
  return (
    <div className={Styles.class}>
      <div style={{ background: bg }} className={Styles.first}>
        <p>{subjectName}</p>
      </div>
      <div className={Styles.second}>
        <h2>{time ? time.replace("-", " to ") : ""}</h2>
      </div>
      <div className={Styles.third}>
        {/* <Progress percentage={percentage} /> */}
        <p>{date}</p>
      </div>
    </div>
  );
};

export default Classes;
