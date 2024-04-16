const productModel = require("../models/productModel");

const updateStock = async (id, quantity) => {
  const product = await productModel.findById(id);
  product.Stock -= quantity;
  await product.save({ validateBeforeSave: false });
};

const updateReturnStock = async (id, quantity) => {
  const product = await productModel.findById(id);
  product.Stock += quantity;
  await product.save({ validateBeforeSave: false });
};

module.exports = { updateStock, updateReturnStock };
