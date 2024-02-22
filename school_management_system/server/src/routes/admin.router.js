const { adminRegister } = require("../controller/admin.controller")

const router = require("express").Router()

router.post("/signup",adminRegister) // admin signup

module.exports = router