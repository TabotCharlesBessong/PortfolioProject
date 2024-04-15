const catchAsyncError = require("../middleware/catchAsyncError");
const productModel = require("../models/productModel");
const ApiFeatures = require("../utils/apifeatures");
const ErrorHandler = require("../utils/errorHandler");

const createProduct = catchAsyncError(async (req, res, next) => {
  req.body.user = req.user.id;
  const product = await productModel.create(req.body);
  if (req.body.price < 0) {
    return next(new ErrorHander("Price cannot be negative, 404"));
  } else if (req.body.Stock < 0) {
    return next(new ErrorHandler("Stock cannot be negative, 404"));
  } else {
    res.status(201).json({
      success: true,
      product,
    });
  }
});

const getAllProducts = catchAsyncError(async (req, res, next) => {
  // const resultPerPage = 50;
  const productsCount = await productModel.countDocuments();
  const allProducts = await productModel.find();
  const apiFeature = new ApiFeatures(productModel.find(), req.query)
    .search()
    .searchDept()
    .filter()
    .pagination(resultPerPage);
  // const products = await apiFeature.query;

  let products = await apiFeature.query;

  let filteredProductsCount = products.length;

  // apiFeature.pagination(resultPerPage);

  res.status(200).json({
    success: true,
    products,
    productsCount,
    allProducts,
    resultPerPage,
    filteredProductsCount,
  });
});

const getProductDetails = catchAsyncError(async (req, res, next) => {
  const product = await productModel.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    product,
  });
});

const updateProduct = catchAsyncError(async (req, res, next) => {
  let product = await productModel.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  product = await productModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    product,
  });
});

module.exports = {
  createProduct,
  getAllProducts,
  getProductDetails,
  updateProduct,
};
