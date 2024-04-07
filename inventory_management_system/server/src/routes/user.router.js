const express = require("express")
const { registerUser } = require("../controller/user.controller")

const router = express.Router()

router.post("/signup",registerUser)

module.exports = router