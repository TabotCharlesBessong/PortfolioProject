"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const departmentSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    head: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Doctor",
    },
    staff: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Nurse",
        },
    ],
});
const DepartmentModel = (0, mongoose_1.model)("Department", departmentSchema, "departments");
exports.default = DepartmentModel;
