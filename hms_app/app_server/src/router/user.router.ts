import { Router } from "express";
import { addContactUs, getUserProfile, updateUserProfile } from "../controller/user.controller";

const userRouter = Router();

// POST route to add a Contact Us entry
userRouter.post("/add-contact-us", addContactUs);

// Route to fetch the user profile
userRouter.get("/profile", getUserProfile);

// Route to update the user profile
userRouter.put("/profile-update", updateUserProfile);

export default userRouter;
