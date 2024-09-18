"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
};
module.exports = (0, cors_1.default)(corsOptions);
