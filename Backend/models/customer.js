const mongoose = require("mongoose");

const customer = new mongoose.Schema({
  name: { type: String, required: [true, "name is required"] },
  email: { type: String, required: [true, "email is required"] },
  password: { type: String, required: [true, "password is required"] },
  city: { type: String, required: [true, "city is required"] },
  address: { type: String, required: [true, "address is required"] },
  mobileno: { type: String, required: [true, "mobileno is required"] },
});

module.exports = mongoose.model("customers", customer);
