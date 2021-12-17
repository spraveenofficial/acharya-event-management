import Styles from "./Attendence.module.css";
import Container from "../../components/Container/Container";
import Contribute from "../../components/Contribute/Contribution";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import AttendenceBox from "../../components/AttendenceCard/Attendence";
import axios from "axios";
import { useState, useEffect } from "react";
const Attendence = () => {
  const [attendence, setAttendence] = useState([]);
  const randomColors = ["#b3b3ff", "#66ff66", "blue", "purple", "#ff33ff"];
  const generateColor = () => {
    const random =
      randomColors[Math.floor(Math.random() * randomColors.length)];
    return random;
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
        setAttendence(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getAttendence();
  }, []);
  // console.log(attendence.data.data)
  return (
    <Navbar>
      <Container>
        <h1>Attendence</h1>
        <div className={Styles.attendencecards}>
          {attendence.data
            ? attendence.data.data.map((subjects) => {
                return (
                  <AttendenceBox
                    subjectName={subjects.subject_name}
                    attendedClasses={subjects.present}
                    totalClasses={subjects.total}
                    bg={generateColor()}
                  />
                );
              })
            : "fetching"}
        </div>
      </Container>
      <Contribute />
      <Footer />
    </Navbar>
  );
};

export default Attendence;
