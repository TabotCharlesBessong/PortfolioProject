import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/user.model";
import config from "config";

// Middleware to verify user by JWT token
export const verifyUser = (
  req: Request,
  res: Response,
  next: NextFunction
): Response | void => {
  const token = req.cookies.token;
  if (!token) {
    return res.json("The Token is Not Available");
  } else {
    jwt.verify(
      token,
      config.get<string>("jwtsecret"),
      (err: any, decoded: any) => {
        if (err) {
          return res.json("The Token is Not Valid");
        } else {
          req.email = decoded.email;
          req.username = decoded.username;
          next();
        }
      }
    );
  }
};

// Controller to register a new user
export const registerUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { userName, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res
        .status(400)
        .json({ error: "User with this email already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      userName,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    return res.json(savedUser);
  } catch (error:any) {
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
    const user = await User.findOne({ email });

    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (isPasswordValid) {
        const token = jwt.sign(
          { id: user._id, role: user.role },
          config.get<string>("jwtsecret"),
          {
            expiresIn: "2d",
          }
        );
        res.cookie("token", token);
        return res.json({ status: "Success", token, role: user.role });
      }
    }
    return res.status(400).json({ error: "Invalid email or password" });
  } catch (error:any) {
    return res.status(500).json({ error: error.message });
  }
};

// Controller to log out the user
export const logoutUser = (req: Request, res: Response): Response => {
  res.clearCookie("token");
  return res.json({ message: "User Logged Out" });
};