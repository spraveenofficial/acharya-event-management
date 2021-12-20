import Styles from "./Profile.module.css";
import Lottie from "react-lottie";
import studentImage from "../../Animation/Login.json";
const Profile = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    isClickToPauseDisabled: true,
    animationData: studentImage,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className={Styles.profile}>
      <div className={Styles.left}>
        <img src="https://acharya.ac.in/img/acharya-logo.png" alt="" />
        <div className={Styles.studentname}>
          <h1>Praveen Kumar Singh</h1>
          <h3>BCA-BCA</h3>
        </div>
      </div>
      <div className={Styles.right}>
        <Lottie
          isClickToPauseDisabled
          options={defaultOptions}
          width={200}
          height={200}
          //   height={Styles.lottie}
        />
        
      </div>
    </div>
  );
};

export default Profile;
