const sendMail = require("../services/mail");
const contributonDB = require("../database/model/contribute");
class AcharyaFeatures {
  async registerForContribution(req, res) {
    const { name, auid, department, email } = req.body;
    const newContribution = new contributonDB({
      name,
      auid,
      department,
    });
    await newContribution
      .save()
      .then(async (response) => {
        await sendMail.sendContributionMail(email);
        return res.json({
          success: true,
          message: "Successfully Registered.",
        });
      })
      .catch((err) => {
        if (err.code === 11000) {
          return res.json({
            success: false,
            message: "You're already registered.",
          });
        } else {
          return res.json({
            success: false,
            message: "Registration Failed.",
          });
        }
      });
  }
}

module.exports = new AcharyaFeatures();
