const dotenv = require("dotenv").config();
const express = require("express");
const DBConnection = require("./database/db");
const ejs = require("ejs");
const path = require("path");
const app = express();
const PORT = 4001;
const qr = require("qrcode");
const cors = require("cors");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use(
//   cors({
//     origin: "*",
//     credentials: true,
//   })
// );

app.use(express.static("views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "views")));

app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Origin",
    "https://main.d2xlx4fu5imths.amplifyapp.com"
  ); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use("/api", require("./routes/routes"));
app.use("/event", (req, res) => {
  qr.toDataURL("okbye", (err, src) => {
    if (err) res.send("Error occured");
    // console.log(src)
    // Let us return the QR code image as our response and set it to be the source used in the webpage
    res.render("event.ejs", { qr: src });
    // res.render("scan", { src });
  });
});

app.listen(PORT, (req, res) => {
  console.log(`Listening on port ${PORT}`);
});
