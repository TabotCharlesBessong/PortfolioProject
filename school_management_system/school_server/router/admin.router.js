import express from "express";
import { adminRegister } from "../controller/admin.controller.js";
import { adminSignIn } from "../controller/user.controller.js";

const adminRouter = express.Router();

adminRouter.post("/signin", adminSignIn);
adminRouter.post("/admin", adminRegister);

export default adminRouter;
