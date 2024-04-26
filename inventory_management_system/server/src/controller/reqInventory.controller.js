const catchAsyncError = require("../middleware/catchAsyncError");
const reqInventoryModel = require("../models/reqInventoryModel");
const ErrorHandler = require("../utils/errorHandler");
const { updateReturnStock, updateStock } = require("../utils/stock");

const createReqInventory = catchAsyncError(async (req, res, next) => {
  const { orderItems, department } = req.body;
  const reqInventory = await reqInventoryModel.create({
    orderItems,
    department,
    user: req.user,
  });
  res.status(201).json({
    success: true,
    reqInventory,
  });
});

const getSingleRequest = catchAsyncError(async (req, res, next) => {
  const request = await reqInventoryModel
    .findById(req.params.id)
    .populate("user", "name email phoneNumber");

  if (!request) {
    return next(new ErrorHandler("Request not found with this Id", 404));
  }

  res.status(200).json({
    success: true,
    request,
  });
});

const myRequests = catchAsyncError(async (req, res, next) => {
  const request = await reqInventoryModel.find({ user: req.user._id });

  res.status(200).json({
    success: true,
    request,
  });
});

const getAllRequest = catchAsyncError(async (req, res, next) => {
  const request = await reqInventoryModel
    .find()
    .populate("user", "name email phoneNumber role");

  res.status(200).json({
    success: true,
    request,
  });
});

const updateRequest = catchAsyncError(async (req, res, next) => {
  const request = await reqInventoryModel.findById(req.params.id);
  if (!request)
    return next(new ErrorHandler("Request with this ID not found", 404));

  request.requestStatus = req.body.requestStatus;
  request.returnDate = req.body.returnDate;

  if (req.body.requestStatus === "Delivered") {
    request.orderItems.forEach(async (o) => {
      await updateStock(o.product, o.quantity);
    });
    request.deliveredAt = new Date();
  }
  if (req.body.requestStatus === "Received") {
    request.orderItems.forEach(async (o) => {
      await updateReturnStock(o.product, o.quantity);
    });
  }

  await request.save({ validateBeforeSave: false });
  res.status(200).json({
    success: true,
    request,
  });
});

const deleteRequest = catchAsyncError(async (req, res, next) => {
  const request = await reqInventoryModel.findByIdAndDelete(req.params.id);

  if (!request) {
    return next(new ErrorHandler("Request not found with this Id", 404));
  }

  // await request.remove();

  res.status(200).json({
    success: true,
    message: "Request deleted",
  });
});

module.exports = {
  createReqInventory,
  getSingleRequest,
  myRequests,
  getAllRequest,
  updateRequest,
  deleteRequest
};
