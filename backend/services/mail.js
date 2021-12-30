var nodemailer = require("nodemailer");
const axios = require("axios");
const qr = require("qrcode");
var ejs = require("ejs");
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
      this.sendLoginAlert(
        res.data.data.student_name,
        res.data.data.acerp_email
      );
    });
  }
  async sendLoginAlert(name, email) {
    const subject = "Login Alert ⚠️ !";
    const message = await ejs.renderFile("views/welcome.ejs", {
      name: name,
    });
    this.sendMail(email, message, subject);
  }
  async sendContributionMail(email) {
    const subject = "Thanks for applying ! ⚠️";
    const message = `<p>Thanks for applying.<br><br>Regards,<br>Praveen Kumar Singh.</p>`;
    this.sendMail(email, message, subject);
  }
  async sendBookingSuccessMail() {
    const subject = "Thanks for booking Event";
    const qrCode = await qr.toDataURL("okbye");
    console.log(qrCode)
    const message = await ejs.renderFile("views/event.ejs", {
      qr: qrCode,
    });
    this.sendMail("spraveen593@gmail.com", message, subject);
  }
  async sendMail(email, message, subject) {
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
      subject: subject, // Subject line
      html: message, // plain text body
    };

    transporter.sendMail(mailOptions, function (err, info) {
      if (err) console.log(err);
      else console.log("mail sent");
    });
  }
}

module.exports = new sendLoginAlert();
