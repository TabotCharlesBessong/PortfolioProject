import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRouter from "./router/auth.router.js"

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser);

app.use("/api/auth",authRouter)

app.listen(port, () => {
  console.log(`Our server is running on port number ${port}...`);
});
