const axios = require("axios");
const User = require("../database/model/users");
const Event = require("../database/model/event");
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
            username: auid,
            password: password,
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
  async addEvent(req, res) {
    const {
      title,
      category,
      description,
      venue,
      slug,
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
      slug,
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
  async getEvents(req, res) {
    await Event.find({}).then((response) => {
      console.log(response);
      return res.json({
        message: "Data fetched success",
        success: true,
        data: response,
      });
    });
  }
}

module.exports = new Acharya();
