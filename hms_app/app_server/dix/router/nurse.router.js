"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const nurse_controller_1 = require("../controller/nurse.controller");
const nurseRouter = (0, express_1.Router)();
nurseRouter.get("/get-nurses", nurse_controller_1.getNurses);
nurseRouter.post("/add-nurse", nurse_controller_1.addNurse);
exports.default = nurseRouter;
