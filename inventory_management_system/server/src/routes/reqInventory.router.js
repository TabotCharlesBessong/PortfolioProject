const express = require("express")
const { isAuthenticatedUser } = require("../middleware/auth")
const { createReqInventory } = require("../controller/reqInventory.controller")

const router = express.Router()

router.post("/new",isAuthenticatedUser,createReqInventory)

module.exports = router