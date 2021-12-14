import Styles from "./Events.module.css";
import Container from "../../components/Container/Container";
import Contribute from "../../components/Contribute/Contribution";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
const Events = () => {
  return (
    <Navbar>
      <Container>
        <h1>This is Events page</h1>
      </Container>
      <Contribute />
      <Footer />
    </Navbar>
  );
};

export default Events;
