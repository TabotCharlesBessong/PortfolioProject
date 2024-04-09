const catchAsyncError = require("../middleware/catchAsyncError");
const userModel = require("../models/userModel");
const ErrorHandler = require("../utils/errorHandler");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");

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
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
});

// reset password
const forgotPassword = catchAsyncError(async (req, res, next) => {
  const user = await userModel.findOne({ email: req.body.email });

  if (!user) return next(new ErrorHandler("User not found", 404));

  // get resetpassword token
  const resetToken = user.getResetPasswordToken();
  await user.save({ validateBeforeSave: false });
  const resetPasswordUrl = `${req.protocol}://${req.get(
    "host"
  )}/api/password/reset/${resetToken}`;
  const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\nIf you did not request this email, please ignore it.`;
  try {
    await sendEmail({
      email: user.email,
      subject: `Password Recovery Email`,
      message,
    });

    res.status(200).json({
      success: true,
      message: `Email sent to ${user.email} successfully`,
    });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save({ validateBeforeSave: false });
    return next(new ErrorHandler(error.message, 500));
  }
});

const resetPassword = catchAsyncError(async (req, res, next) => {
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await userModel.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });
  if (!user)
    return next(
      new ErrorHandler(
        "Reset Password Token is invalid or has been expired",
        400
      )
    );
  if (req.body.password !== req.body.confirmPassword)
    return next(new ErrorHandler("Your two passwords do not match", 400));

  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();
  sendToken(user, 200, res);
  // const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\nIf you did not request this email, please ignore it.`;
  // try {
  //   await sendEmail({
  //     email: user.email,
  //     subject: `Password Recovery Email`,
  //     message,
  //   });

  //   res.status(200).json({
  //     success: true,
  //     message: `Email sent to ${user.email} successfully`,
  //   });
  // } catch (error) {
  //   user.resetPasswordToken = undefined;
  //   user.resetPasswordExpire = undefined;

  //   await user.save({ validateBeforeSave: false });
  //   return next(new ErrorHandler(error.message, 500));
  // }
});

const updatePassword = catchAsyncError(async (req, res, next) => {
  const user = await userModel.findById(req.user.id).select("+password");
  const isPasswordMatched = await user.comparePassword(req.body.oldPassword);
  if (!isPasswordMatched)
    return next(new ErrorHandler("Old password is incorrect", 400));
  if (req.body.newPassword !== req.body.confirmPassword)
    return next(new ErrorHandler("password does not match", 400));
  user.password = req.body.newPassword;
  await user.save();
  sendToken(user, 200, res);
});

const getUserDetails = catchAsyncError(async (req, res, next) => {
  const user = await userModel.findById(req.user.id);

  res.status(200).json({
    success: true,
    user,
  });
});

const getAllUsers = catchAsyncError(async (req, res, next) => {
  const users = await userModel.find();
  res.status(200).json({
    success: true,
    users,
  });
});

const getSingleUser = catchAsyncError(async (req, res, next) => {
  const user = await userModel.findById(req.params.id);

  if (!user)
    return next(
      new ErrorHandler(`User does not exist with Id: ${req.params.id}`)
    );
  res.status(200).json({
    success: true,
    user,
  });
});

const updateProfile = catchAsyncError(async (req, res, next) => {
  const newUserData = {
    name: req.body.name,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
  };

  const user = await userModel.findByIdAndUpdate(req.user.id, newUserData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({ success: true, user });
});

module.exports = {
  registerUser,
  loginUser,
  logUserOut,
  forgotPassword,
  resetPassword,
  getUserDetails,
  getAllUsers,
  getSingleUser,
  updatePassword,
  updateProfile
};
