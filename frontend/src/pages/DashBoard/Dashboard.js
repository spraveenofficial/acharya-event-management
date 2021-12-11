import Styles from "./Dashboard.module.css";
// import bgImage from "../../images/cc.jpg";
import Container from "../../components/Container/Container";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";
const Dashboard = () => {
  const [studentData, setstudentData] = useState([]);
  useEffect(() => {
    getUserData()
  }, []);
  const getUserData = async () => {
    await axios({
      url: "/dashboard",
      method: "POST",
      headers: {
        token: localStorage.getItem("erpToken"),
      },
    })
      .then((response) => {
        setstudentData(response.data.data);
        console.log(studentData);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Navbar>
      <Container>
        <div className={Styles.navbar}>
          <h2>
            Welcome, Praveen Kumar Singh. Good Evening
          </h2>
        </div>
      </Container>
    </Navbar>
  );
};

export default Dashboard;
