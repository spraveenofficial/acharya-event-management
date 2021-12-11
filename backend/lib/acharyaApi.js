const axios = require("axios");
const User = require("../database/model/users");
const Auth = require("../services/auth");

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
          return res.status(200).json({
            success: true,
            message: "Successfully Logged in",
            token: response.data.token,
            aliveToken: aliveToken,
          });
        }
      })
      .catch((err) => {
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
        return res.status(500).json({
          success: false,
          message: "Unable to get student information.",
        });
      });
  }
}

module.exports = new Acharya();
