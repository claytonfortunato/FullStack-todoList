const mongoose = require("mongoose");

const taskLogin = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const userModel = mongoose.model("user", taskLogin);

module.exports = userModel;
