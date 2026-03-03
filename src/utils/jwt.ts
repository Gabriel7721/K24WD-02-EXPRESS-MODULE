import jwt from "jsonwebtoken";
import { env } from "../config/env.js";

export type AccessTokenPayload = {
  sub: string; // user_id
  role: "customer" | "admin";
};

export type RefreshTokenPayload = {
  sub: string; // user_id
  jti: string; // token_id trong database
};

export function signAccessToken(payload: AccessTokenPayload): string {
  return jwt.sign(payload, env.jwtAccessSecret, {
    expiresIn: env.accessTokenTltSeconds,
  });
}
export function verifyAccessToken() {}

export function signRefreshToken() {}
export function verifyRefreshToken() {}
