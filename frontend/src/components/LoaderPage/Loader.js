import Styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={Styles.loading}>
      <div className={Styles.loader}></div>
      <p>Loading</p>
    </div>
  );
};

export default Loader;
