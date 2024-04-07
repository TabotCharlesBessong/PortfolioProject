const catchAsyncError = require("../middleware/catchAsyncError")
const userModel = require("../models/userModel")
const sendToken = require("../utils/jwtToken")

const registerUser = catchAsyncError(async (req,res,next) => {
  const {name,email,password,phoneNumber,role} = req.body

  const user = await userModel.create({
    name,
    email,
    password,
    phoneNumber,
    role
  })
  sendToken(user,200,res)
})

module.exports = {registerUser}