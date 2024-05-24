const mongoose = require("mongoose");

const MONGODB_URL =

const connectDataBase = () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(MONGODB_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectDataBase;
