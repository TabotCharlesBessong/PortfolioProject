import { Request, Response, NextFunction } from "express";

// Extend the Request interface to include the user object
interface AuthenticatedRequest extends Request {
  user?: {
    role: string;
  };
}

const checkAdmin = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Response | void => {
  if (!req.user || req.user.role !== "admin") {
    return res
      .status(401)
      .json({ error: "You Are Not Authorized to perform this Operation!!!" });
  }
  next();
};

export default checkAdmin;
