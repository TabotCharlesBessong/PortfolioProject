import { NextFunction, Request, Response } from "express";

// Extend the Request interface to include the user object
interface AuthenticatedRequest extends Request {
  user: {
    role: string;
  };
}

const checkAccess = (req:AuthenticatedRequest, res:Response, next:NextFunction) => {
  if (
    req.user.role !== "admin" &&
    req.user.role !== "doctor" &&
    req.user.role !== "nurse"
  ) {
    return res
      .status(401)
      .json({ error: "You Are Not Authorized to perform this Operation!!!" });
  }
  next();
};

module.exports = checkAccess;
