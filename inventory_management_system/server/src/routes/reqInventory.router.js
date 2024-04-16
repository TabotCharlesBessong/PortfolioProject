const express = require("express")
const { isAuthenticatedUser } = require("../middleware/auth")
const { createReqInventory, getSingleRequest } = require("../controller/reqInventory.controller")

const router = express.Router()

router.post("/new",isAuthenticatedUser,createReqInventory)
router.post("/:id",isAuthenticatedUser,getSingleRequest)

module.exports = router