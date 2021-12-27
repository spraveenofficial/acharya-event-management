const mongoose = require("mongoose");

const bookedSchema = new mongoose.Schema(
  {
    eventId: {
      type: String,
      required: true,
    },
    auid: {
      type: String,
      required: true,
    },
    studentName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    paymentMode: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("EventBooked", bookedSchema);
