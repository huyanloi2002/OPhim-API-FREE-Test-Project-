const express = require("express");
const http = require("http");
const cors = require("cors");
const axios = require("axios");
const cookieParser = require("cookie-parser");
const connectDataBase = require("./config/dataBase");
const requestIp = require("request-ip");
const cloudinary = require("cloudinary").v2;
const fileUpload = require("express-fileupload");
require("dotenv").config();

const movieRouter = require("./routes/movieRouter");
const authRouter = require("./routes/authRouter");
const userRouter = require("./routes/userRouter");
const supportRouter = require("./routes/supportRouter");

const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());
app.use(cookieParser());
app.use(requestIp.mw());
app.use(
  fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
  })
);

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

connectDataBase();

const server = http.createServer(app);

app.use("/api/v1/movie-test-project", movieRouter);
app.use("/api/v1/movie-test-project", authRouter);
app.use("/api/v1/movie-test-project", userRouter);
app.use("/api/v1/movie-test-project", supportRouter);

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log("Server connected with port", PORT);
});
