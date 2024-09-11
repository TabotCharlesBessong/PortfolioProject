"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkAdmin = (req, res, next) => {
    if (!req.user || req.user.role !== "admin") {
        return res
            .status(401)
            .json({ error: "You Are Not Authorized to perform this Operation!!!" });
    }
    next();
};
exports.default = checkAdmin;
