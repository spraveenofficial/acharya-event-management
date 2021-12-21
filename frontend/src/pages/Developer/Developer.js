import Container from "../../components/Container/Container";
import Contribute from "../../components/Contribute/Contribution";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Styles from "./Developer.module.css";
import Social from "../../components/SocialIcon/Social";
import praveenPhoto from "../../images/praveen.jpeg";
import { FacebookLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";
// import {Navigate } from "react-router-dom";
const Developer = () => {
  return (
    <Navbar>
      <Container>
        {/* <h1>Developers</h1>
        <p>Persons behind this Software.</p> */}
        <div className={Styles.devs}>
          <div className={Styles.left}>
            <div className={Styles.profile}>
              <div className={Styles.name}>
                <h2>Praveen Kumar Singh</h2>
                <p>AIGS || BCA (2019-2022)</p>
                <p className={Styles.bio}>
                  I love making the things that help others to do their thing.{" "}
                  <br /> <br /> I'm a Full Stack Engineer specializing in
                  building (and occasionally designing) exceptional digital
                  experiences. My interest in web development started back in
                  2018 when I decided to play around with inspect elements,
                  typing stuff on the console seeing it change the button on my
                  Facebook was the coolest thing ever. I've been in love with
                  the web & especially Frontend since then. <br /> <br />
                  Email: spraveen593@gmail.com
                </p>
              </div>

              <div className={Styles.dp}>
                <img className={Styles.photo} src={praveenPhoto} alt="" />
              </div>
            </div>
            <div className={Styles.social}>
              <h3>Connect me</h3>
              <div className={Styles.icons}>
                {/* <Navigate to="https://google.com"> */}
                  <Social
                    bg="#4267B2"
                    logo={<FacebookLogo color="#fff" weight="bold" size={40} />}
                  />
                {/* </Navigate> */}
                <Social
                  bg="#FD396A"
                  logo={<InstagramLogo color="#fff" weight="bold" size={40} />}
                />
                <Social
                  bg="#28A4FB"
                  logo={<LinkedinLogo color="#fff" weight="bold" size={40} />}
                />
              </div>
            </div>
            {/* <div className={Styles.data}>
              <p>This is the student</p>
            </div> */}
          </div>
          <div className={Styles.right}>
            <div style={{ border: "none" }} className={Styles.profile}>
              <div className={Styles.name}>
                <h2>Mohit Kumar</h2>
                <p>AIGS || BCA (2019-2022)</p>
                <p>ok</p>
              </div>
              <div className={Styles.dp}>
                <img className={Styles.photo} src={praveenPhoto} alt="" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Contribute />
      <Footer />
    </Navbar>
  );
};

export default Developer;
