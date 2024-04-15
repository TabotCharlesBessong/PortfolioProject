const catchAsyncError = require("../middleware/catchAsyncError");
const vendorProductModel = require("../models/vendorProductModel");
const ApiFeatures = require("../utils/apifeatures");
const ErrorHandler = require("../utils/errorHandler");

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
  res.status(200).json({
    productsCount,
    success: true,
    products,
    filteredProductsCount,
    pages,
  });
});

const getAdminProcucts = catchAsyncError(async (req, res, next) => {
  const products = await vendorProductModel.find();
  const productsCount = await vendorProductModel.countDocuments();
  res.status(200).json({
    success: true,
    products,
    productsCount,
  });
});

const getProductDetails = catchAsyncError(async (req, res, next) => {
  const product = await vendorProductModel.findById(req.params.id).lean();
  if (!product) return next(new ErrorHandler("Product not found", 404));
  res.status(200).json({
    success: true,
    product,
  });
});

const updateProduct = catchAsyncError(async (req, res, next) => {
  let product = await vendorProductModel.findById(req.params.id);
  if (!product) return next(new ErrorHandler("Product not found", 404));
  product = await vendorProductModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );
  res.status(200).json({
    success: true,
    product,
  });
});

const deleteProduct = catchAsyncError(async (req, res, next) => {
  const product = await vendorProductModel.findByIdAndDelete(req.params.id);
  if (!product) return next(new ErrorHandler("Product not found", 404));
  // await product.remove()
  res.status(200).json({
    success: true,
    message: "Product deleted ",
  });
});

const createProductReview = catchAsyncError(async (req, res, next) => {
  const { rating, comment, productId } = req.body;
  const review = {
    user: req.user._id,
    name: req.user.name,
    rating: Number(rating),
    comment,
  };
  const product = await vendorProductModel.findById(productId);
  const isReviewed = product.reviews.find(
    (rev) => rev.user.toString() === req.user._id.toString()
  );

  if (isReviewed) {
    product.reviews.forEach((rev) => {
      if (rev.user.toString() === req.user._id.toString())
        (rev.rating = rating), (rev.comment = comment);
    });
  } else {
    product.reviews.push(review);
    product.numOfReviews = product.reviews.length;
  }

  let avg = 0;
  product.reviews.forEach((rev) => {
    avg += rev.rating;
  });
  product.ratings = avg / product.reviews.length;
  await product.save({ validateBeforeSave: false });
  res.status(200).json({
    success: true,
    review,
  });
});

const getProductReviews = catchAsyncError(async (req, res, next) => {
  const product = await vendorProductModel.findById(req.query.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    reviews: product.reviews,
  });
});

const deleteProductReview = catchAsyncError(async (req, res, next) => {
  const product = await vendorProductModel.findById(req.query.productId);
  if (!product) return next(new ErrorHandler("Product not found", 404));
  const reviews = product.reviews.filter(
    (rev) => rev._id.toString() !== req.query.id.toString()
  );
  let avg = 0;
  reviews.forEach((rev) => {
    avg += rev.rating;
  });
  let ratings = 0;
  if (reviews.length === 0) ratings = 0;
  else ratings = avg / reviews.length;
  const numOfReviews = reviews.length;
  await vendorProductModel.findByIdAndUpdate(
    req.query.productId,
    {
      reviews,
      ratings,
      numOfReviews,
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );
  res.status(200).json({
    success: true,
  });
});

module.exports = {
  createProduct,
  getAllProducts,
  getAdminProcucts,
  getProductDetails,
  updateProduct,
  deleteProduct,
  createProductReview,
  getProductReviews,
  deleteProductReview,
};
