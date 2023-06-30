const express = require("express");
const router = express.Router();
const cors = require("cors");
const { user, registerUser } = require("../../controllers/authController");

//middleware
router.use(
  cors({
    credentials: true,
    origin: "http://localhost:8000",
  })
);

router.get("/", user);
router.post("/register", registerUser);

module.exports = router;
