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
          message: "Successfully Registered",
        });
      })
      .catch((err) => {
        console.log(err)
        return res.json({
          success: false,
          message: "Registration Failed",
        });
      });
  }
}

module.exports = new AcharyaFeatures();
