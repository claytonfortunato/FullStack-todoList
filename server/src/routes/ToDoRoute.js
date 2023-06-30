const express = require("express");
const {
  getToDo,
  createToDo,
  updateToDo,
  deleteToDo,
} = require("../controllers/todocontroller");
const router = express.Router();

router.post("/users", require("./authRoutes"));

router.post("/todos", createToDo);
router.put("/todos/:id", updateToDo);
router.get("/todos", getToDo);
router.delete("/todos/:id", deleteToDo);

module.exports = router;
