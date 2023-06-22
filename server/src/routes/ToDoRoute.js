const express = require("express");
const {
  getToDo,
  createToDo,
  updateToDo,
  deleteToDo,
} = require("../controllers/todocontroller");
const router = express.Router();

router.get("/tasks", getToDo);
router.post("/tasks", createToDo);
router.patch("/tasks/:id", updateToDo);
router.delete("/tasks/:id", deleteToDo);

module.exports = router;
