import jwt from "jsonwebtoken";
import { env } from "../config/env.js";
export function signAccessToken(payload) {
    return jwt.sign(payload, env.jwtAccessSecret, {
        expiresIn: env.accessTokenTltSeconds,
    });
}
export function verifyAccessToken() { }
export function signRefreshToken() { }
export function verifyRefreshToken() { }
//# sourceMappingURL=jwt.js.map