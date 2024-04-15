const express = require("express");
const { isAuthenticatedUser } = require("../middleware/auth");
const {
  createProduct,
  getAllProducts,
  getProductDetails,
} = require("../controller/product.controller");

const router = express.Router();

router.post("/new", isAuthenticatedUser, createProduct);
router.post("/all", getAllProducts);
router.post("/:id", getProductDetails);

module.exports = router;
