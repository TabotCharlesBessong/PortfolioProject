const catchAsyncError = require("../middleware/catchAsyncError");
const reqInventoryModel = require("../models/reqInventoryModel");

const createReqInventory = catchAsyncError(async (req,res,next) => {
  const {orderItems,department} = req.body
  const reqInventory = await reqInventoryModel.create({
    orderItems,
    department,
    user:req.user
  })
  res.status(201).json({
    success:true,
    reqInventory
  })
})

module.exports = {createReqInventory}