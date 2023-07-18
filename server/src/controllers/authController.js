const User = require("../models/usermod");
const { hashPassword, comparePassword } = require("../helpers/auth");
const jwt = require("jsonwebtoken");
require("dotenv").config;

const user = (req, res) => {
  res.json("teste is working");
};

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name) {
      return res.json({
        error: "Nome é requerido",
      });
    }

    if (!password || password.length < 6) {
      return res.json({
        error: "A senha é obrigatória e deve ter pelo menos 6 caracteres",
      });
    }
    //Check email
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({
        error: "Email já foi usado",
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
      jwt.sign(
        { email: user.email, id: user._id, name: user.name },
        process.env.JWT_SECRET,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json(user);
        }
      );

      if (!match) {
        res.json({
          error: "Passwords do not match",
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const getProfile = (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
      if (err) throw err;
      res.json(user);
    });
  } else {
    res.json(null);
  }
};

module.exports = { user, registerUser, loginUser, getProfile };
