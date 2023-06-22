const mongoose = require("mongoose");
const db = mongoose.connection;
const DATABASE_URL = process.env.DATABASE_URL;

module.exports = function () {
  mongoose.set("strictQuery", false);
  mongoose.connect(DATABASE_URL);

  db.on("error", (error) => console.log(error));
  db.on("open", () => console.log("Connected to MongoDB"));
  db.on("close", () => console.log("Disconnected from MongoDB"));
};
