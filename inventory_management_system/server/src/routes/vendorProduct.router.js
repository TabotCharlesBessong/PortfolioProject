const express = require("express");
const { isAuthenticatedUser } = require("../middleware/auth");
const {
  createProduct,
  getAllProducts,
  getAdminProcucts,
  getProductDetails,
  updateProduct,
} = require("../controller/vendorProduct.controller");

const router = express.Router();

router.post("/vendorProduct/new", isAuthenticatedUser, createProduct);
router.get("/vendorproducts", getAllProducts);
router.get("/adminproducts", isAuthenticatedUser, getAdminProcucts);
router.get("/vendorproduct/:id",getProductDetails)
router.put("/vendorproduct/:id",isAuthenticatedUser,updateProduct)

module.exports = router;
