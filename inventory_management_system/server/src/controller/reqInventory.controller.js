const catchAsyncError = require("../middleware/catchAsyncError");
const reqInventoryModel = require("../models/reqInventoryModel");

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

module.exports = {
  createReqInventory,
  getSingleRequest,
  myRequests,
  getAllRequest,
};
