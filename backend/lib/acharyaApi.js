const axios = require("axios");
const User = require("../database/model/users");
const Event = require("../database/model/event");
const newBooking = require("../database/model/eventBooked");
const Auth = require("../services/auth");
const Mail = require("../services/mail");

class Acharya {
  async erpLogin(req, res) {
    const auid = req.body.username;
    const password = req.body.password;
    await axios({
      url: process.env.ERP_LOGIN,
      method: "POST",
      data: {
        username: auid,
        password: password,
      },
    })
      .then(async (response) => {
        if (response.data.success === false) {
          return res.status(200).json({
            success: false,
            message: "Invalid AUID or password",
          });
        } else if (response.data.success === true) {
          const student = await new User({
            auid: auid,
          });
          student
            .save()
            .then((res) => {
              console.log("User Saved");
            })
            .catch((err) => {
              console.log("Unable to save user");
            });
          const aliveToken = await Auth.aliveLogin(auid, password);
          const sendLoginAlert = await Mail.getUserEmail(response.data.token);
          return res.status(200).json({
            success: true,
            message: "Successfully Logged in",
            token: response.data.token,
            aliveToken: aliveToken,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  }
  async studentProfile(req, res) {
    await axios({
      url: process.env.ERP_PROFILE,
      method: "POST",
      headers: {
        token: req.headers.token,
      },
    })
      .then((response) => {
        if (response.data.success === false) {
          return res.status(201).json({
            success: false,
            message: "Unable to retreive Student Information",
          });
        } else if (response.data.success === true) {
          return res.status(200).json({
            success: true,
            message: "User data retreive successfully",
            data: response.data,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json({
          success: false,
          message: "Unable to get student information.",
        });
      });
  }
  async Attendence(req, res) {
    await axios({
      url: process.env.ERP_ATTENDANCE,
      method: "POST",
      headers: {
        token: req.headers.token,
      },
    })
      .then((response) => {
        if (response.data.success === false) {
          return res.status(201).json({
            success: false,
            message: "Unable to retreive Student Information",
          });
        } else if (response.data.success === true) {
          return res.status(200).json({
            success: true,
            message: "User data retreive successfully",
            data: response.data,
          });
        }
      })
      .catch((err) => {
        return res.status(500).json({
          success: false,
          message: "Unable to get student information.",
        });
      });
  }
  async onlineClasses(req, res) {
    await axios({
      url: process.env.ONLINE_CLASSES,
      method: "POST",
      headers: {
        Authorization: req.headers.authorization,
      },
    })
      .then((response) => {
        if (response.data.data.length === 0) {
          return res.json({
            success: true,
            message: "No Classes today",
          });
        } else {
          return res.json({
            success: true,
            message: "No Classes today",
            classes: response.data.data,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  async offlineClasses(req, res) {
    const date = new Date();
    let month = date.getMonth();
    let year = date.getFullYear();
    let todayDate = date.getDate();
    console.log(todayDate);
    await axios({
      url: process.env.OFFLINE_CLASSES,
      method: "POST",
      headers: {
        token: req.headers.token,
      },
      data: {
        month: month + 1,
        year: year,
      },
    })
      .then((response) => {
        //   console.log(response.data.data.length);
        //   console.log(response.data.data[todayDate - 1]);
        return res.json({
          success: true,
          classes: response.data.data[todayDate - 1],
        });
      })
      .catch((err) => {
        return res.json({
          success: false,
          message: "Unable to get offline classes",
        });
      });
  }
  async addEvent(req, res) {
    console.log(req.body);
    const {
      title,
      category,
      description,
      venue,
      joiningFee,
      thumbnail,
      startDate,
      endsDate,
      eventDate,
      winingPrize,
      noOfSlots,
      organisedBy,
    } = req.body;
    const newEvent = new Event({
      title,
      category,
      description,
      venue,
      joiningFee,
      thumbnail,
      startDate,
      endsDate,
      eventDate,
      winingPrize,
      noOfSlots,
      organisedBy,
    });
    await newEvent
      .save()
      .then((response) => {
        return res.json({
          message: "Successfully Created Event",
          status: 200,
          success: true,
        });
      })
      .catch((err) => {
        console.log(err);
        return res.json({
          message: "Error While Creating Event",
          status: 400,
          success: false,
        });
      });
  }
  async isAdmin(req, res) {
    const { auid } = req.body;
    await User.findOne({ auid: auid }).then((response) => {
      return res.json(response);
    });
  }
  async getEvents(req, res) {
    await Event.find({}).then((response) => {
      // console.log(response);
      return res.json({
        message: "Data fetched success",
        success: true,
        data: response,
      });
    });
  }
  async bookEvent(req, res) {
    const { eventId, auid, studentName, phoneNumber, email, paymentMode } =
      req.body;
    await User.findOne({ username: auid })
      .then(async (response) => {
        if (response == null) {
          return res.json({
            success: false,
            message: "Invalid set of parameters",
          });
        } else {
          await Event.findById(eventId).then(async (response) => {
            console.log(response.id);
            await newBooking
              .find({ eventId: eventId })
              .then(async (response) => {
                console.log(response);
                if (response[0].auid === auid) {
                  return res.json({
                    success: false,
                    message: "You have already booked this event",
                  });
                } else {
                  const booking = new newBooking({
                    eventId,
                    bookingId: Math.floor(new Date().valueOf() * Math.random()),
                    auid,
                    studentName,
                    phoneNumber,
                    email,
                    paymentMode,
                  });
                  await booking.save().then((response) => {
                    return res.json({
                      success: true,
                      message: "Successfully Booked Event",
                    });
                  });
                }
              })
              .catch((err) => {
                console.log(err);
                return res.json({
                  success: false,
                  message: "Invalid set of parameters",
                });
              });
          });
        }
      })
      .catch((err) => {
        console.log(err);
        return res.json({
          success: false,
          message: "Invalid set of parameters",
        });
      });
  }
  async eachEvent(req, res) {
    const eventId = req.params.eventId;
    await Event.findById(eventId)
      .then((response) => {
        return res.json(response);
      })
      .catch((err) => {
        return res.json({
          success: false,
          message: "Unable to find.",
        });
      });
  }
}

module.exports = new Acharya();
