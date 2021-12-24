import Styles from "./Classes.module.css";
import Container from "../../components/Container/Container";
import Contribute from "../../components/Contribute/Contribution";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Loader from "../../components/LoaderPage/Loader";
import store from "../../store";
import { loadOnlineClass, loadOfflineClass } from "../../actions/class";
import { useEffect } from "react";
import ClassesBox from "../../components/ClassesBox/Class";
import { useSelector } from "react-redux";
const Classes = () => {
  const { onlineClass, offlineClass } = useSelector((state) => state.classes);
  useEffect(() => {
    store.dispatch(loadOnlineClass());
    store.dispatch(loadOfflineClass());
  }, []);
  return (
    <Navbar>
      <Container>
        {!offlineClass.success ? (
          <Loader />
        ) : (
          <>
            <div className={Styles.offline}>
              <h2>Offline Classes</h2>
              <div className={Styles.boxes}>
                {offlineClass.classes.map((eachClasses) => {
                  return (
                    <ClassesBox
                      bg="#1F2889"
                      date={eachClasses.selected_date}
                      subjectName={eachClasses.subject_name}
                      time={eachClasses.interval}
                    />
                  );
                })}
              </div>
              {/* <ClassesBox /> */}
            </div>
            <div className={Styles.online}>
              <h2>Online Classes</h2>
              <p>{onlineClass}</p>
              {/* <ClassesBox /> */}
            </div>
          </>
        )}
      </Container>
      <Contribute />
      <Footer />
    </Navbar>
  );
};

export default Classes;
