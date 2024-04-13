const express = require("express")
const { isAuthenticatedUser } = require("../middleware/auth")
const { createProduct } = require("../controller/vendorProduct.controller")

const router = express.Router()

router.post("/vendorProduct/new",isAuthenticatedUser,createProduct)

module.exports = router