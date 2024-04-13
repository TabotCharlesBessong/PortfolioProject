const express = require("express")
const { isAuthenticatedUser } = require("../middleware/auth")
const { createProduct, getAllProducts } = require("../controller/vendorProduct.controller")

const router = express.Router()

router.post("/vendorProduct/new",isAuthenticatedUser,createProduct)
router.get("/vendorproducts",getAllProducts)

module.exports = router