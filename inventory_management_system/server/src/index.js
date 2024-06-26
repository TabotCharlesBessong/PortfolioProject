const express = require("express");
const dotenv = require("dotenv").config();
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const userRouter = require("./routes/user.router");
const vendorProductRouter = require("./routes/vendorProduct.router");
const productRouter = require("./routes/product.router");
const reqInventoryRouter = require("./routes/reqInventory.router");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/user", userRouter);
app.use("/api/admin", vendorProductRouter);
app.use("/api/product", productRouter);
app.use("/api/inventory", reqInventoryRouter);

module.exports = app;
