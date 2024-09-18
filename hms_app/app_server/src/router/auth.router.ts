// src/router/auth.router.ts
import { Router, Request, Response } from "express";
import {
  verifyUser,
  registerUser,
  loginUser,
  logoutUser,
} from "../controller/auth.controller"; // Import the controllers
import { AuthRequest } from "src/types";

const authRouter = Router();

// Route to get the current user (Protected)
authRouter.post("/", verifyUser, (req: AuthRequest, res: Response) => {
  // Access email and username from the extended Request object
  const email = req.email;
  const username = req.username;

  return res.json({ email, username });
});

// Route to register a new user
authRouter.post("/register", registerUser);

// Route to log in the user
authRouter.post("/login", loginUser);

// Route to log out the user
authRouter.get("/logout", logoutUser);

export default authRouter;
