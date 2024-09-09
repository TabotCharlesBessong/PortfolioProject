import { Router } from "express";
import { addContactUs } from "../controller/user.controller";

const userRouter = Router();

// POST route to add a Contact Us entry
userRouter.post("/add-contact-us", addContactUs);

export default userRouter;
