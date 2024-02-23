const { sclassCreate } = require("../controller/sclass.controller")

const router = require("express").Router()

router.post("/create",sclassCreate)

module.exports = router