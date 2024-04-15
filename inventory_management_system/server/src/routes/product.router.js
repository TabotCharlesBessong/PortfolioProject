const express = require("express");
const { isAuthenticatedUser } = require("../middleware/auth");
const {
  createProduct,
  getAllProducts,
  getProductDetails,
  updateProduct,
  deleteProduct,
} = require("../controller/product.controller");

const router = express.Router();

router.post("/new", isAuthenticatedUser, createProduct);
router.get("/all", getAllProducts);
router.get("/:id", getProductDetails);
router.put("/:id", isAuthenticatedUser, updateProduct);
router.delete("/:id", isAuthenticatedUser, deleteProduct);

module.exports = router;
