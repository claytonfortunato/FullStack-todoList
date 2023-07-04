const express = require("express");
const router = express.Router();
const cors = require("cors");
const {
  user,
  registerUser,
  loginUser,
  getTodo,
} = require("../controllers/authController");

//middleware
router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

router.get("/", user);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/todo", getTodo);

module.exports = router;
