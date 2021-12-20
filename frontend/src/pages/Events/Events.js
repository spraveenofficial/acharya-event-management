import Styles from "./Events.module.css";
import Container from "../../components/Container/Container";
import Contribute from "../../components/Contribute/Contribution";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Loader from "../../components/LoaderPage/Loader";
import EventCards from "../../components/EventBox/Event";
import { useEffect, useState } from "react";
import Button from "../../components/ColorButton/Button";
import store from "../../store";
import { loadAdmin } from "../../actions/features";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Events = () => {
  const navigate = useNavigate();
  const [loading, isLoading] = useState(false)
  const [event, setEvent] = useState([]);
  const { user } = useSelector((state) => state.auth);
  const { isAdmin, isSuperUser } = useSelector((state) => state.adminData);
  useEffect(() => {
    store.dispatch(loadAdmin(user.auid));
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
  const Loading = () => {
    isLoading(true);
    navigate("/addevent");
  };
  return (
    <Navbar>
      <Container>
        <div className={Styles.title}>
          <h1>Events</h1>
          {isAdmin || isSuperUser ? (
            <Button
              color="black"
              onClick={Loading}
              loading={loading}
              text="Create Event"
            />
          ) : (
            ""
          )}
        </div>
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
