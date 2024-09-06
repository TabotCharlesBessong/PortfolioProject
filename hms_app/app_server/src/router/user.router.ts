import { Router } from "express";
import { addContactUs } from "src/controller/user.controller";

const router = Router();

// POST route to add a Contact Us entry
router.post("/add-contact-us", addContactUs);

export default router;
