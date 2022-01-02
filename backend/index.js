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
app.use("/api", require("./routes/routes"));
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  })
);
app.use(express.static("views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "views")));

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "");
//   res.setHeader("Access-Control-Allow-Headers", "*");
//   res.header("Access-Control-Allow-Credentials", true);
//   next();
// });

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
