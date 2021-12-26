const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  venue: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  joiningFee: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  endsDate: {
    type: String,
    required: true,
  },
  eventDate: {
    type: String,
    required: true,
  },
  winingPrize: {
    type: String,
    required: true,
  },
  organisedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  noOfSlots: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Events", eventSchema);
