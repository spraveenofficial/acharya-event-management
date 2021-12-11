import Styles from "./Container.module.css"; //
const Container = ({ children }) => {
  return (
    <div className={Styles.container}>
      <div>{children}</div>
    </div>
  );
};

export default Container;
