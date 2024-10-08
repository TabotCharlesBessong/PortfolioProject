import { Request } from "express";

declare global {
  namespace Express {
    interface Request {
      email?: string;
      username?: string;
      userId?: string
    }
  }
}
