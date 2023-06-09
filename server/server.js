require("dotenv").config();
const express = require("express");
const cookiePerser = require("cookie-parser");

const routes = require("./src/routes/ToDoRoute");
const connectToDB = require("./src/config/db");
const app = express();

app.use(express.json());
app.use(cookiePerser());
app.use(express.urlencoded({ extended: false }));

//All other Routes
app.use("/", require("./src/routes/authRoutes"));
app.use(routes);

const port = 8000;
app.listen(port, () => {
  console.log(`Listening on port : ${port}`);
  connectToDB();
});
