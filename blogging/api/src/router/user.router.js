import { Router } from "express";
import {
  google,
  signin,
  signout,
  signup,
} from "../controllers/auth.controller.js";
import { deleteUser, getUsers, updateUser } from "../controllers/user.controllers.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/google", google);
router.put("/update/:userId", verifyToken, updateUser);
router.delete("/delete/:userId", verifyToken, deleteUser);
router.post("/signout", signout);
router.get("/getusers",verifyToken,getUsers)
router.get("/:userId")

export default router;
