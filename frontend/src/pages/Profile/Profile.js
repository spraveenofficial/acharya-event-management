import { UserCircle } from "phosphor-react";
import Container from "../../components/Container/Container";
import Contribute from "../../components/Contribute/Contribution";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Styles from "./Profile.module.css";
import Profiles from "../../components/Profile/Profile";
const Profile = () => {
  return (
    <Navbar>
      <Container>
        {/* <div className={Styles.profile}>
          <div className={Styles.name}>
            <div className={Styles.user}>
              <UserCircle size={68} />
            </div>
            <div className={Styles.username}>
              <h2>Praveen Kumar Singh</h2>
              <h3>BCA</h3>
            </div>
          </div>
          <div className={Styles.second}>
              <h2>This is second</h2>
          </div>
          <div className={Styles.data}></div>
        </div> */}
        <Profiles />
      </Container>
      <Contribute />
      <Footer />
    </Navbar>
  );
};

export default Profile;
