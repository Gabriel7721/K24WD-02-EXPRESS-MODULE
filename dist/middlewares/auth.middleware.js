import { ApiError } from "../utils/http.js";
import { verifyAccessToken } from "../utils/jwt.js";
export function requireAuth(req, _res, next) {
    const header = req.headers.authorization;
    if (!header?.startsWith("Bearer "))
        throw new ApiError(401, { message: "Missing Authorization Bearer" });
    const token = header.slice("Bearer ".length);
    try {
        const payload = verifyAccessToken(token);
        req.auth = { userId: payload.sub, role: payload.role };
    }
    catch {
        throw new ApiError(401, { message: "Invalid or Expired Access Token" });
    }
}
export function requireRole() { }
//# sourceMappingURL=auth.middleware.js.map