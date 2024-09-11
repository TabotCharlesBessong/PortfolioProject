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
exports.logoutUser = exports.loginUser = exports.registerUser = exports.verifyUser = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_model_1 = __importDefault(require("../models/user.model"));
const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json("Token is not available");
    }
    jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json("Token is not valid");
        }
        ``;
        if (decoded) {
            req.email = decoded.email;
            req.username = decoded.username;
        }
        next();
    });
};
exports.verifyUser = verifyUser;
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userName, email, password } = req.body;
    try {
        const existingUser = yield user_model_1.default.findOne({ email });
        if (existingUser) {
            return res
                .status(400)
                .json({ error: "User with this email already exists" });
        }
        const salt = yield bcrypt_1.default.genSalt(10);
        const hashedPassword = yield bcrypt_1.default.hash(password, salt);
        const newUser = new user_model_1.default({
            userName,
            email,
            password: hashedPassword,
        });
        const savedUser = yield newUser.save();
        return res.json(savedUser);
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
});
exports.registerUser = registerUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const user = yield user_model_1.default.findOne({ email });
        if (user) {
            const isPasswordValid = yield bcrypt_1.default.compare(password, user.password);
            if (isPasswordValid) {
                const token = jsonwebtoken_1.default.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
                    expiresIn: "2d",
                });
                res.cookie("token", token);
                return res.json({ status: "Success", token, role: user.role });
            }
        }
        return res.status(400).json({ error: "Invalid email or password" });
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
});
exports.loginUser = loginUser;
const logoutUser = (req, res) => {
    res.clearCookie("token");
    return res.json({ message: "User Logged Out" });
};
exports.logoutUser = logoutUser;
