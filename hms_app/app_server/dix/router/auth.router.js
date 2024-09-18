"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controller/auth.controller");
const authRouter = (0, express_1.Router)();
authRouter.post("/", auth_controller_1.verifyUser, (req, res) => {
    const email = req.email;
    const username = req.username;
    return res.json({ email, username });
});
authRouter.post("/register", auth_controller_1.registerUser);
authRouter.post("/login", auth_controller_1.loginUser);
authRouter.get("/logout", auth_controller_1.logoutUser);
exports.default = authRouter;
