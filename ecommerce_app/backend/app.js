const cookieParser = require("cookie-parser");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const userRouter = require("./router/user.router");
const shopRouter = require("./router/shop.router");

const app = express();
dotenv.config();

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/", express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

// app.use(ErrorHandler)

app.use("/api/user", userRouter);
app.use("/api/shop", shopRouter);

module.exports = app;
