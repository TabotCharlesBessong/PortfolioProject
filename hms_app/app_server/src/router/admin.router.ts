import express from "express";
import {
  getUsers,
  deleteUser,
  getContacts,
  addDepartment,
  deleteDepartment,
  getDepartments,
  countAll,
} from "../controller/admin.controller";
import checkAdmin from "../middlewares/checkAdmin";

const router = express.Router();

// Routes for users
router.get("/get-users", checkAdmin, getUsers);
router.delete("/delete-user/:id", checkAdmin, deleteUser);

// Routes for contacts
router.get("/get-contacts", checkAdmin, getContacts);

// Routes for departments
router.post("/add-department", checkAdmin, addDepartment);
router.delete("/delete-department/:id", checkAdmin, deleteDepartment);
router.get("/get-department", checkAdmin, getDepartments);

// Count all users, contacts, and departments
router.get("/count-all", checkAdmin, countAll);

export default router;
