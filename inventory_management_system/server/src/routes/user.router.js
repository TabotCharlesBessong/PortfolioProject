const express = require("express");
const {
  registerUser,
  loginUser,
  logUserOut,
} = require("../controller/user.controller");

const router = express.Router();

router.post("/signup", registerUser);
router.post("/login", loginUser);
router.post("/logout", logUserOut);

module.exports = router;
