"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const contactUsSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
    },
    message: {
        type: String,
        required: true,
    },
});
const ContactUsModel = (0, mongoose_1.model)("Contact", contactUsSchema, "contactus");
exports.default = ContactUsModel;
