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
exports.addAppointment = exports.getAppointmentDetail = exports.getAppointments = void 0;
const appointment_model_1 = __importDefault(require("../models/appointment.model"));
const appointment_model_2 = __importDefault(require("../models/appointment.model"));
const getAppointments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appointments = yield appointment_model_2.default.find({});
        return res.json(appointments);
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
});
exports.getAppointments = getAppointments;
const getAppointmentDetail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const appointment = yield appointment_model_2.default.findById(id);
        if (appointment === null) {
            return res.json({ message: "No appointments booked!" });
        }
        return res.json({ appointment });
    }
    catch (error) {
        res.status(5000).json({ error: error.message });
    }
});
exports.getAppointmentDetail = getAppointmentDetail;
const addAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { doctor, patient, appointmentDate, reason, phone } = req.body;
    try {
        const newAppointment = new appointment_model_1.default({
            doctor,
            patient,
            appointmentDate,
            reason,
            phone
        });
        const savedAppointment = yield newAppointment.save();
        return res.json(savedAppointment);
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
});
exports.addAppointment = addAppointment;
