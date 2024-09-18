"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
dotenv_1.default.config();
const checkAdmin = () => (req, res, next) => {
    const token = req.header("x-access-token");
    if (!token) {
        return res.status(401).json({ error: "You are not logged in!!!" });
    }
    try {
        const jwtSecret = process.env.JWT_SECRET;
        const verified = jsonwebtoken_1.default.verify(token, jwtSecret);
        if (!verified) {
            return res.status(401).json({ error: "You are not logged in!!!" });
        }
        if (verified.role !== "admin") {
            return res
                .status(403)
                .json({
                error: "You do not have permission to access this resource.",
            });
        }
        req.user = {
            _id: verified._id,
            role: verified.role,
        };
        next();
    }
    catch (error) {
        res.status(400).json({ error: "Invalid Token" });
    }
};
exports.default = checkAdmin;
