import Styles from "./Navbar.module.css"; //
import { List } from "phosphor-react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
const Navbar = ({ children }) => {
  return (
    <>
      <nav>
        <div className={Styles.logo}>
          <h2>
            <Link to="/">
              <Logo/>
            </Link>
          </h2>
        </div>
        <input type="checkbox" id="click" className={Styles.navclick} />
        <label htmlFor="click" className={Styles.menubtn}>
          <List style={{ color: "white" }} size={40} />
        </label>
        <div className={Styles.menu}>
          <ul>
            <li>
              <Link to="/">
                <p>Home</p>
              </Link>
            </li>
            <li>
              <Link to="/attendence">
                <p>Attendence</p>
              </Link>
            </li>
            <li>
              <Link to="/classes">
                <p>Online Classes</p>
              </Link>
            </li>
            <li>
              <Link to="/events">
                <p>Events</p>
              </Link>
            </li>
            <li>
              <Link to="/login">
                <p>Login</p>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {children}
    </>
  );
};

export default Navbar;
