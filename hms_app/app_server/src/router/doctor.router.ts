import { Router } from "express";
import checkAdmin from "../middlewares/checkAdmin"; // Import the middleware
import { addDoctor, getDoctors } from "../controller/doctor.controller";

const doctorRouter = Router();

// GET route to fetch all doctors
doctorRouter.get("/get-doctors", getDoctors);

// POST route to add a new doctor (protected by admin check)
doctorRouter.post("/add-doctor",  addDoctor);

export default doctorRouter;
