const express = require("express");
const { isAuthenticatedUser } = require("../middleware/auth");
const {
  createProduct,
  getAllProducts,
  getProductDetails,
  updateProduct,
} = require("../controller/product.controller");

const router = express.Router();

router.post("/new", isAuthenticatedUser, createProduct);
router.get("/all", getAllProducts);
router.get("/:id", getProductDetails);
router.post("/:id", isAuthenticatedUser, updateProduct);

module.exports = router;
