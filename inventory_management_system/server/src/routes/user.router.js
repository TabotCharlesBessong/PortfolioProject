const express = require("express");
const {
  registerUser,
  loginUser,
  logUserOut,
  forgotPassword,
} = require("../controller/user.controller");

const router = express.Router();

router.post("/signup", registerUser);
router.post("/login", loginUser);
router.post("/logout", logUserOut);
router.post("/password/forgot", forgotPassword);

module.exports = router;
