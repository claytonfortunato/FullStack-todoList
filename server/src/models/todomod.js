const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  done: { Boolean },
});

const Task = mongoose.model("task", taskSchema);

module.exports = Task;
