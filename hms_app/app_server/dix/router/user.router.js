"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controller/user.controller");
const userRouter = (0, express_1.Router)();
userRouter.post("/add-contact-us", user_controller_1.addContactUs);
exports.default = userRouter;
