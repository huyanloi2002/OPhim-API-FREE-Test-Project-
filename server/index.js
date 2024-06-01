const express = require("express");
const http = require("http");
const cors = require("cors");
const axios = require("axios");
const cookieParser = require("cookie-parser");
const connectDataBase = require("./config/dataBase");
const requestIp = require("request-ip");
require("dotenv").config();

const movieRouter = require("./routes/movieRouter");
const authRouter = require("./routes/authRouter");
const userRouter = require("./routes/userRouter");

const app = express();
app.use(express.json({ limit: "1000mb" }));
app.use(cors());
app.use(cookieParser());
app.use(requestIp.mw());

connectDataBase();

const server = http.createServer(app);

app.use("/api/v1/movie-test-project", movieRouter);
app.use("/api/v1/movie-test-project", authRouter);
app.use("/api/v1/movie-test-project", userRouter);

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log("Server connected with port", PORT);
});
