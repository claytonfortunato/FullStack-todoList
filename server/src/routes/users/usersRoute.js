const router = require("express").Router();
const User = require("../../models/usermod");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/users", async (req, res) => {
  const { name, email, password } = req.body;

  const newPassword = await bcrypt.hash(password, 8);

  const user = User.create({
    name,
    email,
    password: newPassword,
  });

  return res.status(200).json(user);
});

router.post("/users", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) res.status(404).json({ message: "User not found" });

  const comparePassword = await bcrypt.compare(password, user.password);

  if (comparePassword) {
    const token = jwt.sign({ id: user._id, email }, "SECRET");

    user.token = token;

    return res.status(200).json({ ...user.toJSON(), token });
  }
  return res.status(403).json({ message: "User or password invalid!" });
});

module.exports = router;
