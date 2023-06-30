const express = require("express");
const router = express.Router();
const cors = require("cors");
const {
  user,
  registerUser,
  loginUser,
} = require("../controllers/authController");

//middleware
router.use(
  cors({
    credentials: true,
    origin: "http://localhost:8000",
  })
);

router.get("/", user);
router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
