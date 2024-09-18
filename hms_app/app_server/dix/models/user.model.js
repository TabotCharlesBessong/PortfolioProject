"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const appointment_model_1 = require("./appointment.model");
const medicationSchema = new mongoose_1.Schema({
    name: {
        type: String,
    },
    dosage: {
        type: String,
    },
    frequency: {
        type: String,
    },
});
const medicalHistorySchema = new mongoose_1.Schema({
    condition: {
        type: String,
        required: true,
    },
    diagnosisDate: {
        type: Date,
    },
    treatment: {
        type: String,
    },
    medications: [medicationSchema],
});
const userSchema = new mongoose_1.Schema({
    userName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["admin", "doctor", "nurse", "receptionist", "patient"],
        default: "patient",
    },
    phoneNumber: {
        type: String,
        default: "",
    },
    dateOfBirth: {
        type: Date,
        default: "",
    },
    gender: {
        type: String,
        default: "",
    },
    address: {
        street: {
            type: String,
            default: "",
        },
        city: {
            type: String,
            default: "",
        },
        state: {
            type: String,
            default: "",
        },
        zipCode: {
            type: String,
            default: "",
        },
    },
    emergencyContact: {
        name: {
            type: String,
            default: "",
        },
        relationship: {
            type: String,
            default: "",
        },
        phoneNumber: {
            type: String,
            default: "",
        },
    },
    medicalHistory: { type: [medicalHistorySchema], default: [] },
    appointments: { type: [appointment_model_1.appointmentSchema], default: [] },
});
const UserModel = (0, mongoose_1.model)("User", userSchema, "users");
exports.default = UserModel;
