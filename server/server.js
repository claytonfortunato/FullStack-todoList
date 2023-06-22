require("dotenv").config();
const express = require("express");
const userRoute = require("./src/routes/users/usersRoute");

const app = express();
const routes = require("./src/routes/ToDoRoute");
const connectToDB = require("./src/config/db");

// require("./src/controllers/todocontroller");

app.use(express.json());

//All other Routes
app.use("/api/user", userRoute);
app.use(routes);

app.listen(8000, () => {
  console.log("Listening on port : 8000");
  connectToDB();
});
