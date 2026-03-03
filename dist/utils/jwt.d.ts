export type AccessTokenPayload = {
    sub: string;
    role: "customer" | "admin";
};
export type RefreshTokenPayload = {
    sub: string;
    jti: string;
};
export declare function signAccessToken(): void;
export declare function verifyAccessToken(): void;
export declare function signRefreshToken(): void;
export declare function verifyRefreshToken(): void;
//# sourceMappingURL=jwt.d.ts.map