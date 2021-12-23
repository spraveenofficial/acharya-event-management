var nodemailer = require("nodemailer");
const axios = require("axios");
// const template = require("../views/index.ejs");
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
    const subject = "Login Alert ! ⚠️";
    const message = await ejs.renderFile("views/index.ejs", {
      name: name,
    });
    // const message = `<h3>Hey ${name}.\n\n </h3><p>Welcome to the world of acharyaThanks for using our open-source project. I am very glad to serve you. <br><br>Regards,<br>Praveen Kumar Singh.</p>`;
    this.sendMail(email, message, subject);
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
    // const transporter = nodemailer.createTransport({
    //   service: "gmail",
    //   port: 465,
    //   secure: true,
    //   auth: {
    //     user: "praveena.19.abca@acharya.ac.in",
    //     pass: "acharya1234",
    //   },
    // });

    // const data = await ejs.renderFile("views/index.ejs", {
    //   name: "Stranger",
    // });

    // const mainOptions = {
    //   from: '"Tester" testmail@zoho.com',
    //   to: "spraveen593@gmail.com",
    //   subject: "Hello, world!",
    //   html: data,
    // };

    // transporter.sendMail(mainOptions, (err, info) => {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     console.log("Message sent: " + info.response);
    //   }
    // });
  }
  async sendContributionMail(email) {
    const subject = "Thanks for applying ! ⚠️";
    const message = `<p>Thanks for applying.<br><br>Regards,<br>Praveen Kumar Singh.</p>`;
    this.sendMail(email, message, subject);
  }
  async sendBookingSuccessMail(email) {}
}

module.exports = new sendLoginAlert();
