const catchAsyncError = require("../middleware/catchAsyncError");
const vendorProductModel = require("../models/vendorProductModel");
const ApiFeatures = require("../utils/apifeatures");

const createProduct = catchAsyncError(async (req, res, next) => {
  req.body.user = req.user.id;
  try {
    const product = await vendorProductModel.create(req.body);
    res.status(201).json({
      success: true,
      product,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
});

const getAllProducts = catchAsyncError(async (req, res, next) => {
  const resultPerPage = 4;
  const productsCount = await vendorProductModel.countDocuments();
  // const allProducts = await vendorProductModel.find()
  const pages = Math.ceil(productsCount / resultPerPage);
  const apifeature = new ApiFeatures(vendorProductModel.find(), req.query)
    .search()
    .searchDept()
    .filter()
    .pagination();
  let products = await apifeature.query;
  let filteredProductsCount = products.length;
  res
    .status(200)
    .json({
      productsCount,
      success: true,
      products,
      filteredProductsCount,
      pages,
    });
});

module.exports = { createProduct, getAllProducts };
