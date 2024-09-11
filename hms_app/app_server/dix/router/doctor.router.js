"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const doctor_controller_1 = require("../controller/doctor.controller");
const doctorRouter = (0, express_1.Router)();
doctorRouter.get("/get-doctors", doctor_controller_1.getDoctors);
doctorRouter.post("/add-doctor", doctor_controller_1.addDoctor);
exports.default = doctorRouter;
