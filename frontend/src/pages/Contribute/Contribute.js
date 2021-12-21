import Container from "../../components/Container/Container";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Contribute from "../../components/Contribute/Contribution";
import Styles from "./Contribute.module.css";
import DevImage from "../../Animation/Developer.json";
import Lottie from "react-lottie";
import Input from "../../components/Input/Input";
import Button from "../../components/ColorButton/Button";
import { useSelector } from "react-redux";
import { useState } from "react";
import Toast from "../../components/Toast/Toast";
import axios from "axios";
const ContributePage = () => {
  const [submitStatus, setSubmitStatus] = useState(false);
  const [response, setResponse] = useState("");
  const [toast, setToast] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const Loading = () => {
    setIsLoading(true);
    submitForm();
  };
  const { loading, user } = useSelector((state) => state.auth);
  // console.log(loading);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    isClickToPauseDisabled: true,
    animationData: DevImage,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const submitForm = async () => {
    await axios({
      url: "/contribute",
      method: "POST",
      headers: {
        token: localStorage.getItem("erpToken"),
      },
      data: {
        name: user.student_name,
        auid: user.auid,
        department: user.course,
        email: user.acerp_email,
      },
    })
      .then((res) => {
        if (res.data.message === "You're already registered.") {
          setToast(true);
          setIsLoading(false);
          setSubmitStatus(false);
          setResponse("You have already registered.");
        } else if (res.data.success === false) {
          setToast(true);
          setIsLoading(false);
          setSubmitStatus(false);
          setResponse("Unable to Apply.");
        } else {
          setToast(true);
          setIsLoading(false);
          setSubmitStatus(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Navbar>
      <Container>
        {toast ? (
          <Toast
            onClose={(e) => setToast(false)}
            status={submitStatus}
            message={
              submitStatus ? "Sucessfully Registered" : response
            }
          />
        ) : (
          ""
        )}
        <div className={Styles.contribution}>
          <div className={Styles.left}>
            <div className={Styles.title}></div>
            <Lottie
              isClickToPauseDisabled
              options={defaultOptions}
              width={400}
              height={500}
              //   height={Styles.lottie}
            />
          </div>
          <div className={Styles.right}>
            <h1>
              Tired of fighting with Silicon Valley giants to work with software
              developers?
            </h1>
            <p>
              Join our Team and get a chance to work with senior pre-vetted
              remote developers with strong technical and communication skills.
            </p>
            {loading ? (
              <p>Hey its loading</p>
            ) : (
              <>
                <div className={Styles.form}>
                  <label>Enter Your Name*</label>
                  <Input
                    name="Enter your Name"
                    type="text"
                    width="350px"
                    value={user.student_name}
                    disabled={true}
                    // onChange={(e) => setPassword(e.target.value)}
                    // error={passwordError}
                  />
                  <label>Enter Your AUID*</label>
                  <Input
                    name="Enter your Name"
                    type="text"
                    width="350px"
                    value={user.auid}
                    disabled={true}
                    // onChange={(e) => setPassword(e.target.value)}
                    // error={passwordError}
                  />
                  <label>Enter Your Course Name*</label>
                  <Input
                    name="Enter your Name"
                    type="text"
                    width="350px"
                    value={user.course}
                    disabled={true}
                    // onChange={(e) => setPassword(e.target.value)}
                    // error={passwordError}
                  />
                </div>
                <Button
                  color="black"
                  onClick={Loading}
                  loading={isLoading}
                  text="Join Us Now"
                />
                <div className={Styles.imp}>
                  <h3>Important Note before you apply :</h3>
                  <p>1. You should have good proficieny in JavaScript.</p>
                  <p>
                    2. You should have inhand experience with ReactJS and
                    ExpressJS.
                  </p>
                  <p>3. We don't check your marks at all.</p>
                  <p>4. We don't even check your department.</p>
                </div>
              </>
            )}
          </div>
        </div>
      </Container>
      <Contribute />
      <Footer />
    </Navbar>
  );
};

export default ContributePage;
