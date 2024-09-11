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
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Department",
    },
});
const NurseModel = (0, mongoose_1.model)("Nurse", nurseSchema, "nurses");
exports.default = NurseModel;
