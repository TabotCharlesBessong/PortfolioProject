import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/user.model";
import { AuthRequest } from "src/types";
import DoctorModel from "../models/doctor.model";
import NurseModel from "../models/nurse.model";
import dotenv from "dotenv";

dotenv.config();

// Middleware to verify user by JWT token
export const verifyUser = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Response | void => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json("Token is not available");
  }

  jwt.verify(
    token,
    process.env.JWT_SECRET as string,
    (err: any, decoded: any) => {
      if (err) {
        return res.status(401).json("Token is not valid");
      }
      ``;

      if (decoded) {
        // Ensure decoded contains email and username
        req.email = decoded.email;
        req.username = decoded.username;
      }

      next();
    }
  );
};

// Controller to register a new user
export const registerUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { userName, email, password, role } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res
        .status(400)
        .json({ error: "User with this email already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newRole = role ? role : "patient";

    const newUser = new User({
      userName,
      email,
      password: hashedPassword,
      role: newRole,
    });

    const savedUser = await newUser.save();
    return res.json({ savedUser, message: "Success" });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

// Controller to log in the user
export const loginUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { email, password } = req.body;

  try {
    // const user = await User.findOne({ email });
    let doctor, user, nurse;
    let isPasswordValid = false;

    user = await User.findOne({ email });
    doctor = await DoctorModel.findOne({ email });
    nurse = await NurseModel.findOne({ email });

    if (user || doctor || nurse) {
      if (user) isPasswordValid = await bcrypt.compare(password, user.password);
      else if (doctor)
        isPasswordValid = await bcrypt.compare(password, doctor.password);
      else if (nurse)
        isPasswordValid = await bcrypt.compare(password, nurse.password);
    }

    if (isPasswordValid) {
      let token, role, loggedInUser;
      if (user) {
        token = jwt.sign(
          { id: user._id, role: user.role },
          process.env.JWT_SECRET as string,
          {
            expiresIn: "15d",
          }
        );
        role = user.role;
        loggedInUser = user;
      } else if (doctor) {
        token = jwt.sign(
          { id: doctor._id, role: doctor.role },
          process.env.JWT_SECRET as string,
          {
            expiresIn: "15d",
          }
        );
        role = doctor.role;
        loggedInUser = doctor;
      } else if (nurse) {
        token = jwt.sign(
          { id: nurse._id, role: nurse.role },
          process.env.JWT_SECRET as string,
          {
            expiresIn: "15d",
          }
        );
        role = nurse.role;
        loggedInUser = nurse;
      }
      res.cookie("token", token);
      res.json({ status: "Success", token, role, user: loggedInUser });
    } else {
      res.status(401).json({ error: "Invalid email or password" });
    }

    return res.status(400).json({ error: "Invalid email or password" });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

// Controller to log out the user
export const logoutUser = (req: Request, res: Response): Response => {
  res.clearCookie("token");
  return res.json({ message: "User Logged Out" });
};
