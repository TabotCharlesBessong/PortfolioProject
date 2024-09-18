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
exports.addNurse = exports.getNurses = void 0;
const nurse_model_1 = __importDefault(require("../models/nurse.model"));
const getNurses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const nurses = yield nurse_model_1.default.find({});
        return res.json(nurses);
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
});
exports.getNurses = getNurses;
const addNurse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password, ward, department } = req.body;
    try {
        const newNurse = new nurse_model_1.default({
            name,
            email,
            password,
            ward,
            department,
        });
        const savedNurse = yield newNurse.save();
        return res.json(savedNurse);
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
});
exports.addNurse = addNurse;
