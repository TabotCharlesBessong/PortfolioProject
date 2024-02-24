const { studentRegister } = require("../controller/student.controller")

const router = require("express").Router()

router.post("/signup",studentRegister)

module.exports = router