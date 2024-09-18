import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import jwt, { JwtPayload } from "jsonwebtoken";

dotenv.config();

// Extend the Request interface to include the user object
interface AuthenticatedRequest extends Request {
  user?: {
    _id: string;
    role: string;
  };
}

interface VerifiedUser extends JwtPayload {
  _id: string;
  role: string;
  // Add any other fields if needed
}

const checkAdmin =
  () => (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const token = req.header("x-access-token");

    if (!token) {
      return res.status(401).json({ error: "You are not logged in!!!" });
    }

    try {
      const jwtSecret = process.env.JWT_SECRET as string; // Ensure the secret is correctly typed
      const verified = jwt.verify(token, jwtSecret) as VerifiedUser;

      if (!verified) {
        return res.status(401).json({ error: "You are not logged in!!!" });
      }

      if (verified.role !== "admin") {
        return res
          .status(403)
          .json({
            error: "You do not have permission to access this resource.",
          });
      }

      // Attach the user information to req object for later use
      req.user = {
        _id: verified._id,
        role: verified.role,
      };
      next();
    } catch (error) {
      res.status(400).json({ error: "Invalid Token" });
    }
  };

export default checkAdmin;
