const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    auid: {
      type: String,
      required: true,
      unique: true,
    },
    isSuperUser: {
      type: Boolean,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Users", userSchema);
