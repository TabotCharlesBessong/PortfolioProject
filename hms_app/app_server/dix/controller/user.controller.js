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
exports.logout = exports.updateUserProfile = exports.getUserProfile = exports.addContactUs = void 0;
const contactUs_model_1 = __importDefault(require("../models/contactUs.model"));
const user_model_1 = __importDefault(require("../models/user.model"));
const addContactUs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, phone, email, message } = req.body;
    try {
        const newContactUs = new contactUs_model_1.default({
            name,
            phone,
            email,
            message,
        });
        const savedContactUs = yield newContactUs.save();
        return res.json(savedContactUs);
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
});
exports.addContactUs = addContactUs;
const getUserProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, email } = req.query;
    try {
        if (!userId && !email) {
            res
                .status(400)
                .json({ status: "Failure", message: "UserId or Email is required" });
            return;
        }
        const user = yield user_model_1.default.findOne({ $or: [{ _id: userId }, { email }] });
        if (!user) {
            res.status(404).json({ status: "Failure", message: "User not found" });
            return;
        }
        res.status(200).json({ status: "Success", user });
    }
    catch (error) {
        res.status(500).json({ status: "Error", message: error.message });
    }
});
exports.getUserProfile = getUserProfile;
const updateUserProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, updatedProfile } = req.body;
    try {
        if (!userId || !updatedProfile) {
            res
                .status(400)
                .json({
                status: "Failure",
                message: "Email and updated profile data are required",
            });
            return;
        }
        const updatedUser = yield user_model_1.default.findOneAndUpdate({ _id: userId }, { $set: updatedProfile }, { new: true, runValidators: true });
        if (!updatedUser) {
            res.status(404).json({ status: "Failure", message: "User not found" });
            return;
        }
        res.status(200).json({ status: "Success", user: updatedUser });
    }
    catch (error) {
        console.error("Error updating profile:", error.message);
        res.status(500).json({ status: "Error", message: error.message });
    }
});
exports.updateUserProfile = updateUserProfile;
const logout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.clearCookie("token").json("User signed out successfully");
});
exports.logout = logout;
