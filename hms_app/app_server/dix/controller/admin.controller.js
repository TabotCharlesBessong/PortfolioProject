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
exports.countAll = exports.getDepartments = exports.deleteDepartment = exports.addDepartment = exports.getContacts = exports.deleteUser = exports.getUsers = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const department_model_1 = __importDefault(require("../models/department.model"));
const contactUs_model_1 = __importDefault(require("../models/contactUs.model"));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_model_1.default.find({});
        return res.json(users);
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
});
exports.getUsers = getUsers;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedUser = yield user_model_1.default.findByIdAndDelete(req.params.id);
        return res.json(deletedUser);
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
});
exports.deleteUser = deleteUser;
const getContacts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const contacts = yield contactUs_model_1.default.find({});
        return res.json(contacts);
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
});
exports.getContacts = getContacts;
const addDepartment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description, head, staff } = req.body;
    try {
        const existingDept = yield department_model_1.default.findOne({ name });
        if (existingDept) {
            return res
                .status(400)
                .json({ error: "Department with the same name already exists" });
        }
        const newDept = new department_model_1.default({
            name,
            description,
            head,
            staff,
        });
        const savedDept = yield newDept.save();
        return res.json(savedDept);
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
});
exports.addDepartment = addDepartment;
const deleteDepartment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedDept = yield department_model_1.default.findByIdAndDelete(req.params.id);
        return res.json(deletedDept);
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
});
exports.deleteDepartment = deleteDepartment;
const getDepartments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const depts = yield department_model_1.default.find({}).populate("head", "name");
        return res.json(depts);
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
});
exports.getDepartments = getDepartments;
const countAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usersCount = yield user_model_1.default.countDocuments();
        const contactsCount = yield contactUs_model_1.default.countDocuments();
        const deptsCount = yield department_model_1.default.countDocuments();
        return res.json({
            users: usersCount,
            contacts: contactsCount,
            depts: deptsCount,
        });
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
});
exports.countAll = countAll;
