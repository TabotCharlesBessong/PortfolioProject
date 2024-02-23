const {
  adminRegister,
  adminLogin,
  getAllAdmins,
  getAdminById,
} = require("../controller/admin.controller");

const router = require("express").Router();

router.post("/signup", adminRegister); // admin signup
router.post("/login", adminLogin); // admin login
router.get("", getAllAdmins); // fetching all admins
router.get("/:id", getAdminById);

module.exports = router;
