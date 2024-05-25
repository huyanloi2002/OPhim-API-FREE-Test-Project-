const mongoose = require("mongoose");

const MONGODB_URL =
  "mongodb+srv://huyanloi2002:0764988537Huy@movie-api-from-ophim.ma08rfn.mongodb.net/movie-api-from-ophim?retryWrites=true&w=majority&appName=movie-api-from-ophim";

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
