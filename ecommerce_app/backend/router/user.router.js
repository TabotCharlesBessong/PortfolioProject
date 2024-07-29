const express = require("express");
const {
  signup,
  getUser,
  login,
  activate,
} = require("../controller/user.controller");

const userRouter = express.Router();

userRouter.post("/signup", signup);
userRouter.get("/getUser", getUser);
userRouter.post("/login", login);
userRouter.post("/activation", activate);

module.exports = userRouter;
