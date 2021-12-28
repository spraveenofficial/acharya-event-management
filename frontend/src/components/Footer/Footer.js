import Styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
const Footer = () => {
  return (
    <div className={Styles.footer}>
      <div className={Styles.row}>
        <div className={Styles.col}>
          <Logo />
          <p>
            This is Open Source Project for Acharyans. This is advance Software
            where you can access whole acharya in your fingertip.
          </p>
        </div>
        <div className={Styles.col}>
          <h3>
            Overview
            <div className={Styles.underline}>
              <span></span>
            </div>
          </h3>
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="/about">
            <p>About</p>
          </Link>
          <Link to="/help">
            <p>Help</p>
          </Link>
          <Link to="/contribute">
            <p>Wants to Contribute?</p>
          </Link>
        </div>
        <div className={Styles.col}>
          <h3>
            Quick Links
            <div className={Styles.underline}>
              <span></span>
            </div>
          </h3>
          <Link to="/events">
            <p>Events</p>
          </Link>
          <Link to="/profile">
            <p>Profile</p>
          </Link>
          <Link to="/attendence">
            <p>Attendence</p>
          </Link>
          <Link to="/classes">
            <p>Classes</p>
          </Link>
          {/* <Link to="/developer">
            <p>Mohit Kumar</p>
          </Link> */}
        </div>
        <div className={Styles.col}>
          <h3>
            Contact
            <div className={Styles.underline}>
              <span></span>
            </div>
          </h3>
          <Link to="/developer">
            <p>Contact Developer</p>
          </Link>
        </div>
      </div>
      <div className={Styles.copyright}>
        <p style={{ color: "white" }}>Developed by Praveen Kumar Singh</p>
      </div>
    </div>
  );
};

export default Footer;
