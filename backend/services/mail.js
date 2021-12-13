var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "praveena.19.abca@acharya.ac.in",
    pass: "acharya1234",
  },
});

const mailOptions = {
  from: "Praveen Singh", // sender address
  to: "spraveen593@gmail.com", // list of receivers
  subject: "test mail", // Subject line
  html: "<h1>this is a test mail.</h1>", // plain text body
};

transporter.sendMail(mailOptions, function (err, info) {
  if (err) console.log(err);
  else console.log(info);
});
