import { Router } from "express";
import checkAdmin from "../middlewares/checkAdmin"; // Import the middleware
import { addDoctor, getDoctors } from "src/controller/doctor.controller";

const router = Router();

// GET route to fetch all doctors
router.get("/get-doctors", getDoctors);

// POST route to add a new doctor (protected by admin check)
router.post("/add-doctor",  addDoctor);

export default router;
