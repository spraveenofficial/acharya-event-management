const axios = require("axios");
const User = require("../database/model/users");
const Event = require("../database/model/event");
const newBooking = require("../database/model/eventBooked");
const Auth = require("../services/auth");
const Mail = require("../services/mail");
const encrypt = require("../encryption/index");
class Acharya {
  async erpLogin(req, res) {
    const auid = req.body.username;
    const password = req.body.password;
    const { data } = await axios({
      url: process.env.ERP_LOGIN,
      method: "POST",
      data: {
        username: auid,
        password: password,
      },
    });
    if (data.success === false) {
      return res.json({
        success: false,
        message: "Invalid Credentials",
      });
    } else {
      try {
        const checkIFUserExist = await User.findOne({ auid: auid });
        if (!checkIFUserExist) {
          const student = new User({
            auid: auid,
          });
          student.save();
        }
      } catch (error) {
        console.log(error);
      } finally {
        const aliveToken = await Auth.aliveLogin(auid, password);
        // const sendLoginAlert = await Mail.getUserEmail(data.token);
        return res.status(200).json({
          success: true,
          message: "Successfully Logged in",
          token: data.token,
          aliveToken: aliveToken,
        });
      }
    }
  }
  async studentProfile(req, res) {
    try {
      const { data } = await axios({
        url: process.env.ERP_PROFILE,
        method: "POST",
        headers: {
          token: req.headers.token,
        },
      });
      if (data.success === false) {
        return res.status(201).json({
          success: false,
          message: "Unable to retreive Student Information",
        });
      } else {
        const checkStatus = await User.findOne({ auid: data.data.auid });
        return res.status(200).json({
          success: true,
          message: "User data retreive successfully",
          data: {
            ...data.data,
            isAdmin: checkStatus.isAdmin,
            isSuperUser: checkStatus.isSuperUser,
          },
        });
      }
    } catch (error) {
      console.log(error);
      return res.status(404).json({
        success: false,
        message: "Server Error",
      });
    }
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
    const ifExist = await newBooking.find({
      $and: [{ eventId: eventId }, { auid: auid }],
    });
    if (ifExist.length > 0) {
      return res.json({
        success: false,
        message: "You have already booked this event.",
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
      await booking
        .save()
        .then(async (response) => {
          await Mail.sendBookingSuccessMail();
          return res.json({
            success: true,
            message: "Successfully Booked Event",
          });
        })
        .catch((err) => {
          return res.json({
            success: false,
            message: "Unable to book Event",
          });
        });
    }

    // if (ifExist == null) {
    //   const booking = new newBooking({
    //     eventId,
    //     bookingId: Math.floor(new Date().valueOf() * Math.random()),
    //     auid,
    //     studentName,
    //     phoneNumber,
    //     email,
    //     paymentMode,
    //   });
    //   await booking
    //     .save()
    //     .then((response) => {
    //       return res.json({
    //         success: true,
    //         message: "Successfully Booked Event",
    //       });
    //     })
    //     .catch((err) => {
    //       return res.json({
    //         success: false,
    //         message: "Unable to book Event",
    //       });
    //     });
    // } else if (ifExist.auid == auid) {
    //   return res.json({
    //     success: false,
    //     message: "You have already booked this event.",
    //   });
    // }
    // await User.findOne({ username: auid })
    //   .then(async (response) => {
    //     if (response == null) {
    //       return res.json({
    //         success: false,
    //         message: "Invalid set of parameters",
    //       });
    //     } else {
    //       await Event.findById(eventId).then(async (response) => {
    //         console.log(response.id);
    //         await newBooking
    //           .find({ eventId: eventId })
    //           .then(async (response) => {
    //             console.log(response);
    //             if (response[0].auid === auid) {
    //               return res.json({
    //                 success: false,
    //                 message: "You have already booked this event",
    //               });
    //             } else {
    //               const booking = new newBooking({
    //                 eventId,
    //                 bookingId: Math.floor(new Date().valueOf() * Math.random()),
    //                 auid,
    //                 studentName,
    //                 phoneNumber,
    //                 email,
    //                 paymentMode,
    //               });
    //               await booking.save().then((response) => {
    //                 return res.json({
    //                   success: true,
    //                   message: "Successfully Booked Event",
    //                 });
    //               });
    //             }
    //           })
    //           .catch((err) => {
    //             console.log(err);
    //             return res.json({
    //               success: false,
    //               message: "Invalid set of parameters",
    //             });
    //           });
    //       });
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     return res.json({
    //       success: false,
    //       message: "Invalid set of parameters",
    //     });
    //   });
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
