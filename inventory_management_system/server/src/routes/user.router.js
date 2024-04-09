const express = require("express");
const {
  registerUser,
  loginUser,
  logUserOut,
  forgotPassword,
  resetPassword,
  getUserDetails,
  getAllUsers,
  updatePassword,
  getSingleUser,
  updateProfile,
} = require("../controller/user.controller");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.post("/signup", registerUser);
router.post("/login", loginUser);
router.post("/logout", logUserOut);
router.post("/password/forgot", forgotPassword);
router.put("/password/update", isAuthenticatedUser, updatePassword);
router.put("/password/reset/:token", isAuthenticatedUser, resetPassword);
router.get("/me", isAuthenticatedUser, getUserDetails);
router.get(
  "/admin/users",
  isAuthenticatedUser,
  authorizeRoles("Admin"),
  getAllUsers
);
router.get(
  "/admin/user/:id",
  isAuthenticatedUser,
  authorizeRoles("Admin"),
  getSingleUser
);
router.put(
  "/admin/user/:id",
  isAuthenticatedUser,
  authorizeRoles("Admin"),
  updateProfile
);
// router.get(
//   "/admin/user/:id",
//   isAuthenticatedUser,
//   authorizeRoles("Admin"),
//   getSingleUser
// );

module.exports = router;
