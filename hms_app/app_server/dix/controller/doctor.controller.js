"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDoctor = exports.getDoctors = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const doctor_model_1 = __importDefault(require("../models/doctor.model"));
const getDoctors = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const doctors = yield doctor_model_1.default.find({});
        return res.json(doctors);
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
});
exports.getDoctors = getDoctors;
const addDoctor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password, specialization } = req.body;
    try {
        const existingUser = yield doctor_model_1.default.findOne({ email });
        if (existingUser) {
            return res
                .status(400)
                .json({ error: "Doctor with this email already exists" });
        }
        const salt = yield bcrypt_1.default.genSalt(10);
        const hashedPassword = yield bcrypt_1.default.hash(password, salt);
        const newUser = new doctor_model_1.default({
            name,
            email,
            password: hashedPassword,
            specialization,
        });
        const savedUser = yield newUser.save();
        return res.json(savedUser);
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
});
exports.addDoctor = addDoctor;
