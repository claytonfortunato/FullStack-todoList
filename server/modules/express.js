const express = require("express");
const TaskModal = require("../src/models/task");

const app = express();

app.use(express.json());

app.get("/tasks", async (req, res) => {
  try {
    const task = await TaskModal.find({});

    res.status(200).json(task);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

app.post("/tasks", async (req, res) => {
  try {
    const task = await TaskModal.create(req.body);

    res.status(201).json(task);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.patch("/tasks/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const task = await TaskModal.findByIdAndUpdate(id, req.body, { new: true });

    res.status(200).json(task);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.delete("/tasks/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const task = await TaskModal.findByIdAndRemove(id);

    res.status(200).json(task);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const port = 8000;

app.listen(port, () => console.log(`Rodando com Express na porta ${port}!`));
