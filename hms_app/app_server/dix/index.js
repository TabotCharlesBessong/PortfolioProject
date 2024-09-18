"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const admin_router_1 = __importDefault(require("./router/admin.router"));
const appointment_router_1 = __importDefault(require("./router/appointment.router"));
const auth_router_1 = __importDefault(require("./router/auth.router"));
const doctor_router_1 = __importDefault(require("./router/doctor.router"));
const nurse_router_1 = __importDefault(require("./router/nurse.router"));
const user_router_1 = __importDefault(require("./router/user.router"));
const errorHandler_1 = __importDefault(require("./middlewares/errorHandler"));
dotenv_1.default.config();
const URI = process.env.MONGO_URI;
const port = process.env.PORT;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use("/api/auth", auth_router_1.default);
app.use("/api/user", user_router_1.default);
app.use("/api/doctor", doctor_router_1.default);
app.use("/api/nurse", nurse_router_1.default);
app.use("/api/appointment", appointment_router_1.default);
app.use("/api/admin", admin_router_1.default);
app.use(errorHandler_1.default);
mongoose_1.default
    .connect(URI)
    .then(() => {
    console.log("database is connected");
})
    .catch((err) => {
    console.log(err);
});
app.listen(port, () => {
    console.log(`The server is running on port number ${port}....`);
});
