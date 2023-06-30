const User = require("../models/usermod");
const { hashPassword, comparePassword } = require("../helpers/auth");

const user = (req, res) => {
  res.json("teste is working");
};

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name) {
      return res.json({
        error: "name is required",
      });
    }

    if (!password || password.length < 6) {
      return res.json({
        error: "Password is required and must be at least 6 characters long",
      });
    }
    //Check email
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({
        error: "Email is taken already",
      });
    }

    const hashedPasssword = await hashPassword(password);
    //Create user in db
    const user = await User.create({
      name,
      email,
      password: hashedPasssword,
    });

    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check user
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        error: "No user found",
      });
    }

    // Check password
    const match = await comparePassword(password, user.password);
    if (match) {
      res.json("passswords match");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { user, registerUser, loginUser };
