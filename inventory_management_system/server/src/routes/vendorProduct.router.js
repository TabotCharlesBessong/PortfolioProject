const express = require("express");
const { isAuthenticatedUser } = require("../middleware/auth");
const {
  createProduct,
  getAllProducts,
  getAdminProcucts,
  getProductDetails,
  updateProduct,
  deleteProduct,
  createProductReview,
  getProductReviews,
  deleteProductReview,
} = require("../controller/vendorProduct.controller");

const router = express.Router();

router.post("/vendorProduct/new", isAuthenticatedUser, createProduct);
router.get("/vendorproducts", getAllProducts);
router.get("/adminproducts", isAuthenticatedUser, getAdminProcucts);
router.get("/vendorproduct/:id",getProductDetails)
router.put("/vendorproduct/:id",isAuthenticatedUser,updateProduct)
router.delete("/vendorproduct/:id",isAuthenticatedUser,deleteProduct)
router.put("/vendorproduct/review",isAuthenticatedUser,createProductReview)
router.put("/vendorproduct/reviews",isAuthenticatedUser,deleteProductReview)
router.put("/vendorproduct/reviews",getProductReviews)

module.exports = router;
