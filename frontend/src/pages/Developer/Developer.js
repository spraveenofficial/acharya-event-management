import Container from "../../components/Container/Container";
import Contribute from "../../components/Contribute/Contribution";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Styles from "./Developer.module.css";

const Developer = () => {
  return (
    <Navbar>
      <Container>
        <div className={Styles.devs}>
          <h2>This is dev page</h2>
        </div>
      </Container>
      <Contribute />
      <Footer />
    </Navbar>
  );
};

export default Developer;
