"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const admin_controller_1 = require("../controller/admin.controller");
const checkAdmin_1 = __importDefault(require("../middlewares/checkAdmin"));
const adminRouter = express_1.default.Router();
adminRouter.get("/get-users", checkAdmin_1.default, admin_controller_1.getUsers);
adminRouter.delete("/delete-user/:id", checkAdmin_1.default, admin_controller_1.deleteUser);
adminRouter.get("/get-contacts", checkAdmin_1.default, admin_controller_1.getContacts);
adminRouter.post("/add-department", checkAdmin_1.default, admin_controller_1.addDepartment);
adminRouter.delete("/delete-department/:id", checkAdmin_1.default, admin_controller_1.deleteDepartment);
adminRouter.get("/get-department", checkAdmin_1.default, admin_controller_1.getDepartments);
adminRouter.get("/count-all", admin_controller_1.countAll);
exports.default = adminRouter;
