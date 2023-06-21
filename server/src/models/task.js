const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
});

const TaskModal = mongoose.model("task", taskSchema);

module.exports = TaskModal;
