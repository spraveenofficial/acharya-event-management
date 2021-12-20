import Styles from "./Navbar.module.css"; //
import { List } from "phosphor-react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import store from "../../store";
import { userLogout } from "../../actions/auth";
import { useSelector } from "react-redux";
const Navbar = ({ children }) => {
  const { user } = useSelector((state) => state.auth);
  const Logout = () => {
    // console.log('Loging out')
    store.dispatch(userLogout());
  };
  return (
    <>
      <nav>
        <div className={Styles.logo}>
          <h2>
            <Link to="/">
              <Logo />
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
              {/* <Link to="/login"> */}
              {/* <img
                  className={Styles.userphoto}
                  src="https://www.acharyainstitutes.in/student_photos/AGS19ABCA072/AGS19ABCA072.jpg"
                  alt=""
                /> */}
              <p onClick={Logout}>
                {user?.student_name ? (
                  <>
                    {user.student_name}, <span> Logout</span>
                  </>
                ) : (
                  ""
                )}
              </p>
              {/* </Link> */}
            </li>
          </ul>
        </div>
      </nav>
      {children}
    </>
  );
};

export default Navbar;
