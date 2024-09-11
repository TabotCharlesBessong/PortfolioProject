"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const appointment_controller_1 = require("../controller/appointment.controller");
const appointmentRouter = express_1.default.Router();
appointmentRouter.get("/get-appointments", appointment_controller_1.getAppointments);
appointmentRouter.post("/add-appointment", appointment_controller_1.addAppointment);
exports.default = appointmentRouter;
