const axios = require("axios");

class Acharya {
  async erpLogin(req, res) {
    await axios({
      url: process.env.ERP_LOGIN,
      method: "POST",
      data: {
        username: req.body.username,
        password: req.body.password,
      },
    })
      .then((response) => {
        if (response.data.success === false) {
          return res.status(200).json({
            success: false,
            message: "Invalid AUID or password",
          });
        } else if (response.data.success === true) {
          return res.status(200).json({
            success: true,
            message: "Successfully Logged in",
            token: response.data.token,
          });
        }
        console.log(response.data);
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
