require("dotenv").config();
const express = require("express");
const connectToDB = require("./src/config/db");

connectToDB();

require("./src/controllers/todocontroller");

const app = express();
