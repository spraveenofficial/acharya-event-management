import Container from "../../components/Container/Container";
import Contribute from "../../components/Contribute/Contribution";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Styles from "./CreateEvent.module.css";
import Input from "../../components/Input/Input";
import Button from "../../components/ColorButton/Button";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Toast from "../../components/Toast/Toast";
const CreateEvent = () => {
  const { user } = useSelector((state) => state.auth);
  const [status, setStatus] = useState(false);
  const [toast, setToast] = useState(false);
  const [inputItem, setInputItem] = useState({
    title: "",
    category: "",
    description: "",
    venue: "",
    noOfSlots: 0,
    organisedBy: "",
    startDate: "",
    endDate: "",
    eventDate: "",
    eventTime: "",
    thumbnail: "",
  });
  const [formLoading, setFormLoading] = useState(false);
  const Loading = () => {
    setFormLoading(true);
    addEventFunc();
  };
  const handleChange = (e) => {
    setInputItem({ ...inputItem, [e.target.name]: e.target.value });
  };
  const addEventFunc = async () => {
    await axios({
      url: "/add-event",
      method: "POST",
      data: {
        title: inputItem.title,
        category: inputItem.category,
        description: inputItem.description,
        venue: inputItem.venue,
        noOfSlots: Number(inputItem.noOfSlots),
        joiningFee: "800",
        thumbnail: "null",
        startDate: inputItem.startDate,
        endsDate: inputItem.endDate,
        eventDate: inputItem.eventDate,
        winingPrize: "00",
        organisedBy: user.auid,
        noOfSlots: 200,
      },
    }).then((res) => {
      if (res.data.success === false) {
        setStatus(false);
        setToast(true);
        setFormLoading(false)
      } else {
        setFormLoading(false)
        setStatus(true);
        setToast(true);
      }
    });
  };
  return (
    <Navbar>
      <Container>
        {toast ? (
          <Toast
            onClose={(e) => setToast(false)}
            status={status}
            message={
              status ? "Sucessfully Created Event" : "Failed to Create Event"
            }
          />
        ) : (
          ""
        )}
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
                  placeholder="Enter name of Event"
                  type="text"
                  name="title"
                  // width="350px"
                  className={Styles.input}
                  onChange={handleChange}
                />
              </div>
              <div className={Styles.category}>
                <div>
                  <label>Enter Event Category*</label>
                  <Input
                    placeholder="Enter Category of Event"
                    type="text"
                    // width="350px"
                    // error={true}
                    name="category"
                    onChange={handleChange}
                    className={Styles.catrgoryinput}
                  />
                </div>
                <div className={Styles.boxmargin}>
                  <label>Enter No of Slots*</label>
                  <Input
                    placeholder="Enter no of Slots"
                    type="number"
                    name="noOfSlots"
                    onChange={handleChange}
                    className={`${Styles.catrgoryinput}`}
                  />
                </div>
              </div>
              <div className={Styles.venue}>
                <label>Enter Event Venue*</label>
                <Input
                  placeholder="Enter venue of Event"
                  type="text"
                  // width="350px"
                  name="venue"
                  onChange={handleChange}
                  className={Styles.input}
                />
              </div>
              <div className={Styles.organiser}>
                <label>Who is Organizing this Event*</label>
                <Input
                  placeholder="Enter Organiser Name"
                  type="text"
                  value={user.auid}
                  disabled={true}
                  name="organisedBy"
                  onChange={handleChange}
                  className={Styles.input}
                />
              </div>
            </div>
            <div className={Styles.right}>
              <label>Enter Event Description*</label>
              <Input
                placeholder="Enter details of Event"
                type="text"
                // width="350px"
                name="description"
                onChange={handleChange}
                className={Styles.description}
              />
              <div className={Styles.datesdata}>
                <div className={Styles.dates}>
                  <label>Enter Start Date *</label>
                  <input
                    className={Styles.dateinput}
                    onChange={handleChange}
                    name="startDate"
                    type="date"
                  />
                </div>
                <div className={Styles.dates}>
                  <label>Enter Ends Date *</label>
                  <input
                    onChange={handleChange}
                    name="endDate"
                    className={Styles.dateinput}
                    type="date"
                  />
                </div>
              </div>
              <div className={Styles.datesdata}>
                <div className={Styles.dates}>
                  <label>Enter Event Date *</label>
                  <input
                    onChange={handleChange}
                    name="eventDate"
                    className={Styles.dateinput}
                    type="date"
                  />
                </div>
                <div className={Styles.dates}>
                  <label>Enter Event Time *</label>
                  <input
                    className={Styles.dateinput}
                    onChange={handleChange}
                    name="eventTime"
                    type="time"
                  />
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
