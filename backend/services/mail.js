var nodemailer = require("nodemailer");
const axios = require("axios");

class sendLoginAlert {
  constructor() {
    const self = this;
  }
  async getUserEmail(token) {
    await axios({
      url: process.env.ERP_PROFILE,
      method: "POST",
      headers: {
        token: token,
      },
    }).then((res) => {
      this.sendMail(res.data.data.acerp_email);
    });
  }
  async sendMail(email) {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.ACHARYA_EMAIL,
        pass: process.env.ACHARYA_PASSWORD,
      },
    });

    const mailOptions = {
      from: "Praveen Singh", // sender address
      to: email, // list of receivers
      subject: "Hey, you got a Login alert", // Subject line
      html: "<p>Thanks for using our open-source project. I am very glad to serve you.</p>", // plain text body
    };

    transporter.sendMail(mailOptions, function (err, info) {
      if (err) console.log(err);
      else console.log(info);
    });
  }
}

module.exports = new sendLoginAlert();
