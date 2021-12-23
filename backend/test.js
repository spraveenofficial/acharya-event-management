// const fs = require("fs");
// const nodemailer = require("nodemailer");
// const ejs = require("ejs");

// const sendMail = async () => {
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     port: 465,
//     secure: true,
//     auth: {
//       user: "praveena.19.abca@acharya.ac.in",
//       pass: "acharya1234",
//     },
//   });

//   const data = await ejs.renderFile(__dirname + "/views/welcome.ejs", {
//     name: "Stranger",
//   });

//   const mainOptions = {
//     from: '"Tester" testmail@zoho.com',
//     to: "spraveen593@gmail.com",
//     subject: "Hello, world!",
//     html: data,
//   };

//   transporter.sendMail(mainOptions, (err, info) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Message sent: " + info.response);
//     }
//   });
// };

// sendMail();