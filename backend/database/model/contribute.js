const mongoose = require("mongoose");

const contributeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    auid: {
      type: String,
      required: true,
      unique: true,
    },
    department: {
      type: String,
      required: true,
    },
    isSelected: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("contribution", contributeSchema);
