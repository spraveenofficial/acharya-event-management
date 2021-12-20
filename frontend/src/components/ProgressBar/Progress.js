import Styles from "./Progress.module.css";

const Progress = ({ percentage }) => {
  return (
    <div class={Styles.progress}>
      <div
        class={Styles.progressvalue}
        styles={{ height: percentage}}
      ></div>
    </div>
  );
};

export default Progress;
