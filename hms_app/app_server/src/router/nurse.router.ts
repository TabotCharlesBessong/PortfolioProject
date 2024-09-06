import { Router } from "express";
import checkAdmin from "../middlewares/checkAdmin"; // Import the middleware
import { addNurse, getNurses } from "src/controller/nurse.controller";

const router = Router();

// GET route to get all nurses
router.get("/get-nurses", getNurses);

// POST route to add a new nurse (admin protected)
router.post("/add-nurse", addNurse);

export default router;
