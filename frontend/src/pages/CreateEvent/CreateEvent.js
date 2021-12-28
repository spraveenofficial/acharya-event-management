import Container from "../../components/Container/Container";
import Contribute from "../../components/Contribute/Contribution";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Styles from "./CreateEvent.module.css";
import Input from "../../components/Input/Input";
import Button from "../../components/ColorButton/Button";
import { useState } from "react";

const CreateEvent = () => {
  const [formLoading, setFormLoading] = useState(false);
  const Loading = () => {
    setFormLoading(!formLoading);
  };
  return (
    <Navbar>
      <Container>
        <div className={Styles.event}>
          <div className={Styles.title}>
            <h2>Create Acharya Event</h2>
            <p className="blacktext">
              Please fill the form with correct information.
            </p>
          </div>
          <div className={Styles.form}>
            <div className={Styles.left}>
              <div className={Styles.eventtitle}>
                <label>Enter Event Title*</label>
                <Input
                  name="Enter name of Event"
                  type="text"
                  // width="350px"
                  className={Styles.input}
                />
              </div>
              <div className={Styles.category}>
                <div>
                  <label>Enter Event Category*</label>
                  <Input
                    name="Enter Category of Event"
                    type="text"
                    // width="350px"
                    // error={true}
                    className={Styles.catrgoryinput}
                  />
                </div>
                <div className={Styles.boxmargin}>
                  <label>Enter No of Slots*</label>
                  <Input
                    name="Enter name of Event"
                    type="number"
                    // width="350px"
                    className={`${Styles.catrgoryinput}`}
                  />
                </div>
              </div>
              <div className={Styles.venue}>
                <label>Enter Event Venue*</label>
                <Input
                  name="Enter venue of Event"
                  type="text"
                  // width="350px"
                  className={Styles.input}
                />
              </div>
              <div className={Styles.organiser}>
                <label>Who is Organizing this Event*</label>
                <Input
                  name="Enter Organiser Name"
                  type="text"
                  // width="350px"
                  className={Styles.input}
                />
              </div>
            </div>
            <div className={Styles.right}>
              <label>Enter Event Description*</label>
              <Input
                name="Enter details of Event"
                type="text"
                // width="350px"
                className={Styles.description}
              />
              <div className={Styles.datesdata}>
                <div className={Styles.dates}>
                  <label>Enter Start Date *</label>
                  <input className={Styles.dateinput} type="date" />
                </div>
                <div className={Styles.dates}>
                  <label>Enter Ends Date *</label>
                  <input className={Styles.dateinput} type="date" />
                </div>
              </div>
              <div className={Styles.datesdata}>
                <div className={Styles.dates}>
                  <label>Enter Event Date *</label>
                  <input className={Styles.dateinput} type="date" />
                </div>
                <div className={Styles.dates}>
                  <label>Enter Event Time *</label>
                  <input className={Styles.dateinput} type="time" />
                </div>
              </div>
            </div>
          </div>
          <Button
            // color="rgb(46, 110, 223)"
            onClick={Loading}
            loading={formLoading}
            text="Create Event"
            className={Styles.marginbtn}
          />
        </div>
      </Container>
      <Contribute />
      <Footer />
    </Navbar>
  );
};

export default CreateEvent;
