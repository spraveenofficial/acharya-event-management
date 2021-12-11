const mongoose = require("mongoose");

mongoose
  .connect(process.env.DB)
  .then(() => {
    console.log("Database Connected :>");
  })
  .catch((err) => {
    console.log("Error while connecting to DB");
  });

module.exports = mongoose;
