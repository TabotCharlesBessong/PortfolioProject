const catchAsyncError = require("../middleware/catchAsyncError");
const productModel = require("../models/productModel");
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

module.exports = {createProduct}