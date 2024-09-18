import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import adminRouter from "./router/admin.router";
import appointmentRouter from "./router/appointment.router";
import authRouter from "./router/auth.router";
import doctorRouter from "./router/doctor.router";
import nurseRouter from "./router/nurse.router";
import userRouter from "./router/user.router";
import errorHandler from "./middlewares/errorHandler";

dotenv.config();

const URI = process.env.MONGO_URI as string;
const port = process.env.PORT as string;

const app = express();

app.use(
  cors()
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/nurse", nurseRouter);
app.use("/api/appointment", appointmentRouter);
app.use("/api/admin", adminRouter);

app.use(errorHandler)

mongoose
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
