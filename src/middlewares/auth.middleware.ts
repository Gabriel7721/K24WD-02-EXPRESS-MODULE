import type { NextFunction, Request, Response } from "express";
import { ApiError } from "../utils/http.js";
import { verifyAccessToken } from "../utils/jwt.js";

export type AuthUser = {
  userId: string;
  role: "customer" | "admin";
};

declare global {
  namespace Express {
    interface Request {
      auth?: AuthUser;
    }
  }
}

export function requireAuth(req: Request, _res: Response, next: NextFunction) {
  const header = req.headers.authorization;
  if (!header?.startsWith("Bearer "))
    throw new ApiError(401, { message: "Missing Authorization Bearer" });

  const token = header.slice("Bearer ".length);

  try {
    const payload = verifyAccessToken(token);
    req.auth = { userId: payload.sub, role: payload.role };
  } catch {
    throw new ApiError(401, { message: "Invalid or Expired Access Token" });
  }
}

// route: app.use("/createProduct", requireAuth(),requireRole("admin"))
export function requireRole(role: "customer" | "admin") {
  return (req: Request, _res: Response, next: NextFunction) => {
    if (!req.auth) throw new ApiError(401, { message: "Un-Authorized" });

    if (req.auth.role !== role)
      throw new ApiError(403, { message: "Forbidden" });

    next();
  };
}
