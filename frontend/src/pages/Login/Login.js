import Styles from "./Login.module.css";
import Input from "../../components/Input/Input";
import Background from "../../images/cc.jpg";
import Button from "../../components/Button/Button";
import { useState } from "react";
import axios from "axios";
import store from "../../store";
import { loadUser } from "../../actions/auth";
import Toast from "../../components/Toast/Toast";
// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../Baseurl";
const Login = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const [isLoading, setisLoading] = useState(false);
  const [auid, setAuid] = useState("");
  const [password, setPassword] = useState("");
  const [auidError, setAuidError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [toast, setToast] = useState(false);
  const [loginStatus, setLoginStatus] = useState(false);
  const loginFunction = () => {
    if (auid.length < 1 && password.length < 1) {
      setAuidError(true);
      setPasswordError(true);
    } else if (password.length < 1) {
      setAuidError(false);
      setPasswordError(true);
    } else if (auid.length > 2 || password.length > 2) {
      setPasswordError(false);
      setAuidError(false);
      loginStudent();
      setisLoading(true);
    }
  };
  const loginStudent = async () => {
    await axios({
      url: `${baseUrl}/login`,
      method: "POST",
      data: {
        username: auid,
        password: password,
      },
    })
      .then((res) => {
        const data = res.data;
        console.log(data);
        if (!data.success) {
          setToast(true);
          setisLoading(false);
        } else {
          localStorage.setItem("erpToken", data.token);
          localStorage.setItem("aliveToken", data.aliveToken);
          store.dispatch(loadUser());
          setToast(true);
          setisLoading(false);
          setLoginStatus(true);
          setTimeout(() => {
            navigate("/");
          }, 5000);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className={Styles.login}>
      {toast ? (
        <Toast
          onClose={(e) => setToast(false)}
          status={loginStatus}
          message={
            loginStatus
              ? "Login Success. Redirecting.."
              : `Invalid AUID or Password`
          }
        />
      ) : (
        ""
      )}
      <div
        style={{ backgroundImage: `url(${Background})` }}
        className={Styles.left}
      >
        <section>
          <h1>Login Now</h1>
          <p>Access the Acharya events & ERP by Login Here.</p>
        </section>
      </div>
      <div className={Styles.right}>
        <section>
          <h1>Login</h1>
          <p>Log in and explore all of your Acharya access.</p>
        </section>
        <section>
          <>
            <label>Enter AUID*</label>
            {auidError.length > 2 ? <>{auidError}</> : ""}
            <Input
              placeholder="Enter your AUID"
              width="350px"
              onChange={(e) => setAuid(e.target.value)}
              error={auidError}
              value={auid.toUpperCase()}
            />
          </>
          <>
            <label>Enter Password*</label>
            <Input
              placeholder="Enter your Password"
              type="password"
              width="350px"
              onChange={(e) => setPassword(e.target.value)}
              error={passwordError}
            />
          </>
          <Button
            onClick={loginFunction}
            loading={isLoading ? true : false}
            text="Login Now"
          />
        </section>
      </div>
    </div>
  );
};

export default Login;
