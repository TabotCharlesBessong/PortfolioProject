"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const doctorSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    doctorId: {
        type: String,
        required: true,
        unique: true,
        default: () => `DR${Math.floor(1000 + Math.random() * 9000)}`,
    },
    password: {
        type: String,
        required: true,
    },
    specialization: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["admin", "doctor", "nurse", "receptionist", "patient"],
        default: "doctor",
    },
});
const DoctorModel = (0, mongoose_1.model)("Doctor", doctorSchema, "doctors");
exports.default = DoctorModel;
