import express from "express";
import {
  getUsers,
  deleteUser,
  getContacts,
  addDepartment,
  deleteDepartment,
  getDepartments,
  countAll,
  getNewsLetter,
  createNewsLetter,
} from "../controller/admin.controller";
import checkAdmin from "../middlewares/checkAdmin";

const adminRouter = express.Router();

// Routes for users
adminRouter.get("/get-users", getUsers);
adminRouter.delete("/delete-user/:id", checkAdmin, deleteUser);

// Routes for contacts
adminRouter.get("/get-contacts", checkAdmin, getContacts);

// Routes for departments
adminRouter.post("/add-department", checkAdmin, addDepartment);
adminRouter.delete("/delete-department/:id", checkAdmin, deleteDepartment);
adminRouter.get("/get-department", checkAdmin, getDepartments);

// Count all users, contacts, and departments
adminRouter.get("/count-all", countAll);

adminRouter.get("/get-sent-newsletter", getNewsLetter)
adminRouter.post("/newsletter", createNewsLetter)

export default adminRouter;
