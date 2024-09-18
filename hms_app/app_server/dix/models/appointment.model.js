"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appointmentSchema = void 0;
const mongoose_1 = require("mongoose");
exports.appointmentSchema = new mongoose_1.Schema({
    doctor: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Doctor",
        required: true,
    },
    patient: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    appointmentDate: {
        type: Date,
        required: true,
    },
    reason: {
        type: String,
    },
    phone: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ["scheduled", "inProgress", "completed", "cancelled"],
        default: "scheduled",
    },
    notes: {
        type: String,
    },
});
const AppointmentModel = (0, mongoose_1.model)("Appointment", exports.appointmentSchema, "appointments");
exports.default = AppointmentModel;
