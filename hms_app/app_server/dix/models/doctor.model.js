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
    password: {
        type: String,
        required: true,
    },
    specialization: {
        type: String,
        required: true,
    },
});
const DoctorModel = (0, mongoose_1.model)("Doctor", doctorSchema, "doctors");
exports.default = DoctorModel;
