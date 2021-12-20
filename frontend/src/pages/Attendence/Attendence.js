import Styles from "./Attendence.module.css";
import Container from "../../components/Container/Container";
import Contribute from "../../components/Contribute/Contribution";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import AttendenceBox from "../../components/AttendenceCard/Attendence";
import axios from "axios";
import { useState, useEffect } from "react";
import Loader from "../../components/LoaderPage/Loader";
const Attendence = () => {
  const [attendence, setAttendence] = useState([]);
  // const randomColors = ["C615F4", "", "blue", "#11D920", "#ff33ff"];
  // const generateColor = () => {
  //   const random =
  //     randomColors[Math.floor(Math.random() * randomColors.length)];
  //   return random;
  // };
  useEffect(() => {
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
    getAttendence();
  }, []);
  return (
    <Navbar>
      <Container>
        <h1>Attendence</h1>
        {attendence.data ? (
          <>
            <div className={Styles.attendencecards}>
              {attendence.data.data.map((subjects) => {
                return (
                  <AttendenceBox
                    key={subjects.subject_code}
                    subjectName={subjects.subject_name}
                    attendedClasses={subjects.present}
                    totalClasses={subjects.total}
                    bg="#1F2889"
                    percentage={`${(subjects.present / subjects.total) * 100}%`}
                  />
                );
              })}
            </div>
            <h2>Important Note</h2>
            <p className={Styles.black}>
              We are providing this stats based on your ERP data. We are not
              providing any official services to ERP system. If you find any
              error or data inaccuracy in attendence, please report to officials
              now.
            </p>
          </>
        ) : (
          <Loader />
        )}
      </Container>
      <Contribute />
      <Footer />
    </Navbar>
  );
};

export default Attendence;
