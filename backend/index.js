const dotenv = require("dotenv").config();
const express = require("express");
const DBConnection = require("./database/db");
const app = express();
const PORT = 4001;
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api", require("./routes/routes"));

// app.use((err, req, res, next) => {
//   return res.status(err.statusCode).json({ message: err.message });
// });

app.listen(PORT, (req, res) => {
  console.log(`Listening on port ${PORT}`);
});
