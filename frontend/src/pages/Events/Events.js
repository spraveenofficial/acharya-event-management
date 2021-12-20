import Styles from "./Events.module.css";
import Container from "../../components/Container/Container";
import Contribute from "../../components/Contribute/Contribution";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Loader from "../../components/LoaderPage/Loader";
import EventCards from "../../components/EventBox/Event";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Events = () => {
  const [event, setEvent] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      await axios({
        url: "/events",
        method: "GET",
      }).then((res) => {
        setEvent(res.data);
      });
    };
    fetchEvents();
  }, []);
  console.log(event);
  return (
    <Navbar>
      <Container>
        <h1>Events</h1>
        <p className={Styles.black}>
          This is all the events probably happening in our campus. If you wants
          to enroll please go through instructions in event page.
        </p>
        <div className={Styles.data}>
          {event.success ? (
            event.data.map((res) => {
              return (
                // <Link to={res.slug}>
                <EventCards
                  organisedBy={res.organisedBy}
                  category={res.category}
                  name={res.title}
                  date={res.eventDate}
                />
                // </Link>
              );
            })
          ) : (
            <Loader />
          )}
        </div>
      </Container>
      <Contribute />
      <Footer />
    </Navbar>
  );
};

export default Events;
