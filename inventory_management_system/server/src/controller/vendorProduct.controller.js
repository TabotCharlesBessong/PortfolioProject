const catchAsyncError = require("../middleware/catchAsyncError")
const vendorProductModel = require("../models/vendorProductModel")

const createProduct = catchAsyncError(async(req,res,next) => {
  req.body.user = req.user.id
  try {
    const product = await vendorProductModel.create(req.body)
    res.status(201).json({
      success:true,
      product
    })   
  } catch (error) {
    res.status(500).json({error})
  }
})

module.exports = {createProduct}