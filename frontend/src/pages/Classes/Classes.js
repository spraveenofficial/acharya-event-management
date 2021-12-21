import Styles from "./Classes.module.css";
import Container from "../../components/Container/Container";
import Contribute from "../../components/Contribute/Contribution";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Loader from "../../components/LoaderPage/Loader";
import store from "../../store";
import { loadOnlineClass } from "../../actions/class";
import { useEffect } from "react";

const Classes = () => {
  useEffect(() => {
    console.log("ok");
    store.dispatch(loadOnlineClass());
  }, []);

  return (
    <Navbar>
      <Container>
        <h1>This is Classes page</h1>
        <Loader />
      </Container>
      <Contribute />
      <Footer />
    </Navbar>
  );
};

export default Classes;
