import Styles from "./Dashboard.module.css";
import Footer from "../../components/Footer/Footer";
import Container from "../../components/Container/Container";
import Contribute from "../../components/Contribute/Contribution";
import Attendence from "../../components/Attendence/Attendence";
import { useEffect, useState } from "react";
import EventBox from "../../components/EventBox/Event";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";
const Dashboard = () => {
  const [studentData, setstudentData] = useState([]);
  const getUserData = async () => {
    await axios({
      url: "/dashboard",
      method: "POST",
      headers: {
        token: localStorage.getItem("erpToken"),
      },
    })
      .then((response) => {
        setstudentData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getAttendence = async () => {
    await axios({
      url: "/attendence",
      method: "GET",
      headers: {
        token: localStorage.getItem("erpToken"),
      },
    })
      .then((response) => {
        // setstudentData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // console.log(studentData.data.data.acerp_email)
  useEffect(() => {
    // getUserData();
    // getAttendence();
  }, []);
  return (
    <Navbar>
      <Container>
        <div className={Styles.navbar}>
          <h2>Welcome, Praveen Kumar Singh. Good Evening</h2>
          {/* <h1>{studendData}</h1> */}
          <Attendence/>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            ut est, voluptatibus aperiam et corrupti officiis rem pariatur rerum
            earum. Asperiores facilis modi incidunt ad tempora totam ratione
            odit excepturi.
          </p>
        </div>
        <div className={Styles.events}>
          <div className={Styles.eventtitle}>
            <h2>Events Happening Around Us</h2>
            <p>See All</p>
          </div>
          <div className={Styles.cards}>
            <EventBox name="Acharya PUBG Event" dept="AIGS" />
            <EventBox name="Acharya PUBG Event" dept="AIGS" />
            <EventBox name="Acharya PUBG Event" dept="AIGS" />
            <EventBox name="Acharya PUBG Event" dept="AIGS" />
          </div>
        </div>
      </Container>
      <Contribute />
      <Footer />
    </Navbar>
  );
};

export default Dashboard;
