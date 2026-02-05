import dotenv from "dotenv";

dotenv.config();

function required(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env: ${name}`);
  return v;
}

function numberEnv(name: string, fallback: number): number {
  const v = process.env[name];
  if (!v) return fallback;

  const n = Number(v);
  if (!Number.isFinite(n)) throw new Error(`Invalid number env: ${name}`);

  return n;
}

export const env = {
  nodeEnv: process.env.NODE_ENV || "development",
  port: numberEnv("PORT", 9999),

  jwtAccessSecret: required("JWT_ACCESS_TOKEN"),
  jwtRefreshSecret: required("JWT_REFRESH_TOKEN"),

  accessTokenTltSeconds: required("ACCESS_TOKEN_TTL_SECONDS"),
  refreshTokenTltSeconds: required("REFRESH_TOKEN_TTL_SECONDS"),

  refreshCookieName: required("REFRESH_COOKIE_NAME"),
};
