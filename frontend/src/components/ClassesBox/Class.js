import Styles from "./Class.module.css";
import { motion } from "framer-motion";
const Classes = ({ subjectName, time, date, bg }) => {
  const socialVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.2,
        type: "tween",
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <motion.div
      className={Styles.class}
      whileHover={{
        scale: 1.1,
        transition: { duration: 2 },
      }}
    >
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
    </motion.div>
  );
};

export default Classes;
