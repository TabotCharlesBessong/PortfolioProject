"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const newsletterSchema = new mongoose_1.Schema({
    email: {
        type: String,
    },
});
const NewsLetterModel = (0, mongoose_1.model)("newsLetter", newsletterSchema, "newsletter");
exports.default = NewsLetterModel;
