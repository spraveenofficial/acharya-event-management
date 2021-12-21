import Styles from "./Social.module.css";
const Social = ({ logo, bg }) => {
  return (
    <div style={{ background: bg }} className={Styles.socials}>
      {logo}
    </div>
  );
};

export default Social;
