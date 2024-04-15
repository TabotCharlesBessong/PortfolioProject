const express = require("express")
const { isAuthenticatedUser } = require("../middleware/auth")
const { createProduct } = require("../controller/product.controller")

const router = express.Router()

router.post("/new",isAuthenticatedUser,createProduct)

module.exports = router