const mongoose = require("mongoose");

const taskLogin = new mongoose.Schema({
  email: String,
  password: String,
});

const userModel = mongoose.model("user", taskLogin);

module.exports = userModel;
