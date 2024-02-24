const { subjectCreate } = require("../controller/subject.controller")

const router = require("express").Router()

router.post("/create",subjectCreate)

module.exports = router