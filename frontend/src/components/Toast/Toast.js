import { Check, X } from "phosphor-react";
import { useState } from "react";
import Styles from "./Toast.module.css";

const Toast = ({ message, status }) => {
  const [showToast, setShowToast] = useState(true);
  return (
    <>
      {showToast ? (
        <div className={Styles.container}>
          <div className={Styles.toastcell}>
            <div
              className={`${Styles.toast} ${
                status === true ? Styles.toastgreen : Styles.toastred
              }`}
            >
              <div className={Styles.toasticon}>
                {status === true ? <Check /> : <X />}
              </div>
              <div className={Styles.toastcontent}>
                <p className={Styles.toasttype}>
                  {status === true ? "Success" : "Failed"}
                </p>
                <p className={Styles.toastmessage}>
                  {status === true
                    ? "You have successfully logged in."
                    : "Invalid UserName or Password"}
                </p>
              </div>
              <div
                onClick={() => setShowToast(false)}
                className={Styles.toastclose}
              >
                <X size={22} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Toast;
