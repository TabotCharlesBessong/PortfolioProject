const express = require("express");
const { isAuthenticatedUser } = require("../middleware/auth");
const {
  createProduct,
  getAllProducts,
} = require("../controller/product.controller");

const router = express.Router();

router.post("/new", isAuthenticatedUser, createProduct);
router.post("/all", getAllProducts);

module.exports = router;
