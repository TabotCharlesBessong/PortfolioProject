import { Router } from "express";
import {
  verifyUser,
  registerUser,
  loginUser,
  logoutUser,
} from "../controller/auth.controller"; // Import the controllers

const router = Router();

// Route to get the current user (Protected)
router.get("/", verifyUser, (req, res) => {
  return res.json({ email: req.email, username: req.username });
});

// Route to register a new user
router.post("/register", registerUser);

// Route to log in the user
router.post("/login", loginUser);

// Route to log out the user
router.get("/logout", logoutUser);

export default router;
