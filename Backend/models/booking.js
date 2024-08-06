const mongoose = require("mongoose");
const Customer = require("../models/customer");

const booking = new mongoose.Schema({
  cid: { type: String, required: [true, "cid is required"] },
  customer: { type: {} },
  service: { type: {} },
  sid: { type: String, required: [true, "sid is required"] },
  date: { type: String, required: [true, "date is required"] },
});

module.exports = mongoose.model("bookings", booking);
