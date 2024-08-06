const express = require("express");
const { upload } = require("../multer");
const {
  createShop,
  activate,
  loginShop,
  getSeller,
} = require("../controller/shop.controller");
const { isSeller } = require("../middleware/auth");

const shopRouter = express.Router();

shopRouter.post("/create-shop", upload.single("file"), createShop);
shopRouter.post("/activation", activate);
shopRouter.post("/login-shop", loginShop);
shopRouter.get("/getShop", isSeller, getSeller);

module.exports = shopRouter;
