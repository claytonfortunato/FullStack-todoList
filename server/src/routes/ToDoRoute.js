const express = require("express");
const {
  getToDo,
  createToDo,
  updateToDo,
  deleteToDo,
} = require("../controllers/todocontroller");
const router = express.Router();

router.post("/create", createToDo);
router.put("/:id", updateToDo);
router.get("/", getToDo);
router.delete("/:id", deleteToDo);

module.exports = router;
