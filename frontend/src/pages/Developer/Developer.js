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
          <div className={Styles.left}>
            <h2>Praveen Kumar Singh</h2>
            <p>BCA (2019 - 2022)</p>
          </div>
          <div className={Styles.right}>

          </div>
        </div>
      </Container>
      <Contribute />
      <Footer />
    </Navbar>
  );
};

export default Developer;
