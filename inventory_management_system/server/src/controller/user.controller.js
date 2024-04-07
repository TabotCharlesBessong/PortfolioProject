const catchAsyncError = require("../middleware/catchAsyncError");
const userModel = require("../models/userModel");
const ErrorHandler = require("../utils/errorHandler");
const sendToken = require("../utils/jwtToken");

const registerUser = catchAsyncError(async (req, res, next) => {
  const { name, email, password, phoneNumber, role } = req.body;

  const user = await userModel.create({
    name,
    email,
    password,
    phoneNumber,
    role,
  });
  sendToken(user, 200, res);
});

const loginUser = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password)
    return next(new ErrorHandler("Please enter your email and Password", 400));

  const user = await userModel.findOne({ email }).select("+password");

  if (!user) return next(new ErrorHandler("Invalid Email or Password", 401));
  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched)
    return next(new ErrorHandler("Invalid email or password", 401));
  sendToken(user, 200, res);
});

const logUserOut = catchAsyncError(async (req, res, next) => {
  res.cookie("token",null,{
    expires:new Date(Date.now()),
    httpOnly:true
  })

  res.status(200).json({
    success:true,
    message:"Logged Out"
  })
});

module.exports = { registerUser, loginUser, logUserOut };
