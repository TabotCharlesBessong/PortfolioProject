const { adminRegister, adminLogin } = require("../controller/admin.controller")

const router = require("express").Router()

router.post("/signup",adminRegister) // admin signup
router.post("/login",adminLogin) // admin login

module.exports = router