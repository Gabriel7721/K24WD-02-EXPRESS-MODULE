export type AccessTokenPayload = {
  sub: string; // user_id
  role: "customer" | "admin";
};

export type RefreshTokenPayload = {
  sub: string; // user_id
  jti: string; // token_id trong database
};

export function signAccessToken() {}
export function verifyAccessToken() {}

export function signRefreshToken() {}
export function verifyRefreshToken() {}
