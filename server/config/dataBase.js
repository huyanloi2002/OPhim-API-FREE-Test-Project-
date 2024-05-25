const mongoose = require("mongoose");

const connectDataBase = () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectDataBase;
