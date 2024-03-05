import { Router } from "express";
import { google, signin, signup } from "../controllers/auth.controller.js";
import { updateUser } from "../controllers/user.controllers.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/google", google);
router.put("/update/:userId",verifyToken,updateUser)

export default router;
