"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const nurseSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    ward: {
        type: String,
        required: true,
    },
    department: {
        type: String,
    },
    role: {
        type: String,
        enum: ["admin", "doctor", "nurse", "receptionist", "patient"],
        default: "doctor",
    },
});
const NurseModel = (0, mongoose_1.model)("Nurse", nurseSchema, "nurses");
exports.default = NurseModel;
