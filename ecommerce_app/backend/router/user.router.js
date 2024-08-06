const express = require("express");
const {
  signup,
  getUser,
  login,
  activate,
  logout,
} = require("../controller/user.controller");
const { upload } = require("../multer");
const { isAuthenticated } = require("../middleware/auth");

const userRouter = express.Router();

userRouter.post("/signup", upload.single("file"), signup);
userRouter.get("/getUser", isAuthenticated, getUser);
userRouter.post("/login", login);
userRouter.post("/activation", activate);
userRouter.post("/logout", logout)

module.exports = userRouter;
