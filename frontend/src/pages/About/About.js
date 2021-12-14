import Styles from "./About.module.css";
import Container from "../../components/Container/Container";
import Contribute from "../../components/Contribute/Contribution";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
const About = () => {
  return (
    <Navbar>
      <Container>
        <h1>This is About page</h1>
      </Container>
      <Contribute />
      <Footer />
    </Navbar>
  );
};

export default About;
