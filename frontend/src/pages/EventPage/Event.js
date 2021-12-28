import Container from "../../components/Container/Container";
import Contribute from "../../components/Contribute/Contribution";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Styles from "./Event.module.css";
import { useParams } from "react-router-dom";
import Button from "../../components/ColorButton/Button";
import axios from "axios";
import Loader from "../../components/LoaderPage/Loader";
import { useEffect, useState } from "react";
import eventImage from "../../images/event.jpg";
import {
  Clock,
  CurrencyInr,
  FireSimple,
  Globe,
  MapPin,
} from "phosphor-react";
const Event = () => {
  const [event, setEvent] = useState("");
  const { id } = useParams();
  const fetchEvent = async () => {
    await axios({
      url: `${id}`,
      method: "GET",
    }).then((res) => {
      if (res.success == false) {
        setEvent("Lost");
      } else {
        setEvent(res.data);
      }
    });
  };
  useEffect(() => {
    fetchEvent();
  }, []);
  return (
    <Navbar>
      <Container>
        {event.title ? (
          <div className={Styles.container}>
            <div className={Styles.right}>
              <img src={eventImage} alt="" />
              <div className={Styles.description}>
                <p>This is game rule</p>
              </div>
            </div>
            <div className={Styles.left}>
              <div className={Styles.box}>
                <div className={Styles.title}>
                  <h2>{event.title}</h2>
                </div>
                <div className={Styles.data}>
                  <div className={Styles.venue}>
                    <MapPin size={23} />
                    <p>{event.venue}</p>
                  </div>
                  <div className={Styles.eventdate}>
                    <Clock size={23} />
                    <p>{event.eventDate}</p>
                  </div>
                  <div className={Styles.ticket}>
                    <FireSimple size={23} />
                    <p>{event.noOfSlots} Tickets left</p>
                  </div>
                  <div className={Styles.lanuage}>
                    <Globe size={23} />
                    <p>Hindi</p>
                  </div>
                </div>
                <div className={Styles.rate}>
                  <div className={Styles.rates}>
                    <CurrencyInr weight="bold" size={28} /> <h2>{event.joiningFee}</h2>
                  </div>
                  <div className={Styles.btn}>
                    <Button text="Book Now" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </Container>
      <Contribute />
      <Footer />
    </Navbar>
  );
};

export default Event;
