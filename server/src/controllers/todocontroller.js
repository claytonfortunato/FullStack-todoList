const TaskModal = require("../models/todomod");

module.exports.getToDo = async (req, res) => {
  try {
    const task = await TaskModal.find({});

    res.status(200).json(task);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

// Create
module.exports.createToDo = async (req, res) => {
  try {
    const task = await TaskModal.create(req.body);

    res.status(201).json(task);
    console.log("Created Sucessfully!");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//Update
module.exports.updateToDo = async (req, res) => {
  try {
    const id = req.params.id;

    const task = await TaskModal.findByIdAndUpdate(id, req.body, { new: true });

    res.status(200).json(task);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//Delete
module.exports.deleteToDo = async (req, res) => {
  try {
    const id = req.params.id;

    const task = await TaskModal.findByIdAndRemove(id);

    res.status(200).json(task);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
