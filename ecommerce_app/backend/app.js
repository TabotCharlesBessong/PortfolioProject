const cookieParser = require("cookie-parser");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const ErrorHandler = require("./utils/ErrorHandler");
const userRouter = require("./router/user.router");

const app = express();
dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use("/", express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

// app.use(ErrorHandler)

app.use("/api/user", userRouter);

module.exports = app;
