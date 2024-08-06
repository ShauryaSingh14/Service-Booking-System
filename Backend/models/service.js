const mongoose = require("mongoose");

const service = new mongoose.Schema({
  name: { type: String, required: [true, "name is required"] },
  type: { type: String, required: [true, "type is required"] },
  description: { type: String, required: [true, "description is required"] },
  visiting_price: {
    type: String,
    required: [true, "visiting price is required"],
  },
});

module.exports = mongoose.model("services", service);
