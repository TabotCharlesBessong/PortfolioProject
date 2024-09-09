import { Request } from "express";

export interface AuthRequest extends Request {
  email?: string;
  username?: string;
}
