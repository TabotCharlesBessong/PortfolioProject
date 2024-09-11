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
exports.addAppointment = exports.getAppointments = void 0;
const appointment_model_1 = __importDefault(require("../models/appointment.model"));
const getAppointments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appointments = yield appointment_model_1.default.find({});
        return res.json(appointments);
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
});
exports.getAppointments = getAppointments;
const addAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { doctorId, patientId, appointmentDate, reason, status } = req.body;
    try {
        const newAppointment = new appointment_model_1.default({
            doctor: doctorId,
            patient: patientId,
            appointmentDate,
            reason,
            status,
        });
        const savedAppointment = yield newAppointment.save();
        return res.json(savedAppointment);
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
});
exports.addAppointment = addAppointment;
