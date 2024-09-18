import { Router } from "express";
import checkAdmin from "../middlewares/checkAdmin"; // Import the middleware
import { addNurse, getNurses } from "../controller/nurse.controller";

const nurseRouter = Router();

// GET route to get all nurses
nurseRouter.get("/get-nurses", getNurses);

// POST route to add a new nurse (admin protected)
nurseRouter.post("/add-nurse", addNurse);

export default nurseRouter;
