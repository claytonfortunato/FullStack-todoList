const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userModel = require("../../models/usermod");

const app = express();

const port = 8000;

app.use(express.json());

app.post("/user", async (req, res) => {
  const { name, email, password } = req.body;

  const newPassword = await bcrypt.hash(password, 8);

  const user = userModel.create({
    name,
    email,
    password: newPassword,
  });

  return res.status(200).json(user);
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });

  if (!user) res.status(404).json({ message: "User not found" });

  const comparePassword = await bcrypt.compare(password, user.password);

  if (comparePassword) {
    const token = jwt.sign({ id: user._id, email }, "SECRET");

    user.token = token;

    return res.status(200).json({ ...user.toJSON(), token });
  }
  return res.status(403).json({ message: "User or password invalid!" });
});

app.listen(port, async () => {
  console.log("Example app listening on port 8000!");
});
